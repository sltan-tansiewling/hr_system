/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    let getOwnLeaveApplications = (userId, callback) => {

        let employeeId = [userId];
        console.log("Model employeeId " + employeeId);

        let getOwnLeaveQuery = "SELECT leave_application.id, leave_type.name AS leave_type, leave_application.start_date, leave_application.end_date, leave_status.name AS status FROM leave_application INNER JOIN leave_type ON (leave_application.leave_type_id = leave_type.id) INNER JOIN leave_status ON (leave_application.leave_status_id = leave_status.id) WHERE leave_application.employee_id = $1";

        dbPoolInstance.query(getOwnLeaveQuery, employeeId, (error, queryResult) => {

            if (error) {
                callback (error.message, null);
            } else {
                callback (null, queryResult.rows);
            }
        });
    };

    let createNewLeaveApplication = (inputs, callback) => {

        let leaveType = [inputs.leaveType];
        console.log("Model: Leave Type is " + leaveType);

        let leaveTypeIdQuery = "SELECT id FROM leave_type WHERE name = $1";

        dbPoolInstance.query(leaveTypeIdQuery, leaveType, (error, queryResult) => {

            if (error) {
                callback (error.message, null);
            } else {
                callback (null, queryResult.rows);
                console.log(queryResult.rows[0].id);

                console.log("Model inputs: ", inputs);
                let employeeId = inputs.employeeId;

                let leaveTypeId = queryResult.rows[0].id;

                let startDate = inputs.startDate;
                console.log("Model: Start Date is " + startDate);

                let endDate = inputs.endDate;
                console.log("Model: End Date is ", endDate);

                let defaultStatus = inputs.defaultStatus;

                let newLeave = [employeeId, leaveTypeId, startDate, endDate, defaultStatus];

                let createLeaveQuery = "INSERT INTO leave_application (employee_id, leave_type_id, start_date, end_date, leave_status_id) VALUES ($1, $2, $3, $4, $5)";

                dbPoolInstance.query(createLeaveQuery, newLeave, (error, queryResult) => {

                    if (error) {
                        console.log("There is an error creating new leave application.");
                        console.log(error.message);
                        callback(error, null);
                    } else {
                        callback(null, queryResult.rows);
                        console.log("Model: Create successful!");
                    }
                });
            }
        });
    };

    let getLeaveApplicationDetailsById = (id, callback) => {

        let selectedId = id;
        let getLeaveByIdQuery = "SELECT leave_application.id, leave_type.name AS leave_type, leave_application.start_date, leave_application.end_date, leave_status.name AS status FROM leave_application INNER JOIN leave_type ON (leave_application.leave_type_id = leave_type.id) INNER JOIN leave_status ON (leave_application.leave_status_id = leave_status.id) WHERE leave_application.id = $1";

        dbPoolInstance.query(getLeaveByIdQuery, selectedId, (error, queryResult) => {

            if (error) {
                console.log("There is an error querying for leave application by id.");
                callback(error, null);
            } else {
                callback(null, queryResult.rows);
            }
        });
    };

    let updateLeaveApplicationDetailsById = (inputs, callback) => {

        let leaveType = [inputs.leaveType];
        console.log("Model: Leave Type is " + leaveType);

        let getLeaveTypeIdQuery = "SELECT id FROM leave_type WHERE name = $1";

        dbPoolInstance.query(getLeaveTypeIdQuery, leaveType, (error, getLeaveId) => {

            console.log("I am in update query 1");

            if (error) {
                console.log("There is an error getting leave application id.");
                console.log(error.message);
                callback(error, null);
            } else {
                callback(null, getLeaveId.rows);
                console.log("Model: Update successful!");

                console.log("Model inputs: ", inputs);
                let selectedId = inputs.selectedLeaveApplicationId;
                console.log("Model: Selected ID is " + selectedId);

                let leaveTypeId = getLeaveId.rows[0].id;
                console.log("Model: leaveTypeId: ", leaveTypeId);

                let startDate = inputs.startDate;
                console.log("Model: Start Date is ", startDate);

                let endDate = inputs.endDate;
                console.log("Model: End Date is ", endDate);

                let newValues = [selectedId, leaveTypeId, startDate, endDate];

                let updateLeaveQuery = "UPDATE leave_application SET leave_type_id = $2, start_date = $3, end_date = $4 WHERE id = $1";

                dbPoolInstance.query(updateLeaveQuery, newValues, (error, updateResult) => {

                    console.log("I am in update query 2");

                    if (error) {
                        console.log("There is an error updating leave application details.");
                        console.log(error.message);
                        callback(error, null);
                    } else {
                        callback(null, updateResult.rows);
                        console.log("Model: Update successful!");
                    }
                });
            }
        });
    };

    return {
        getOwnLeaveApplications,
        createNewLeaveApplication,
        getLeaveApplicationDetailsById,
        updateLeaveApplicationDetailsById
    };
};