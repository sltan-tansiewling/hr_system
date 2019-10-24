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

    return {
        getOwnLeaveApplications,
        createNewLeaveApplication,
        getLeaveApplicationDetailsById
    };
};