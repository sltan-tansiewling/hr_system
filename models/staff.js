/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    let getOwnLeaveApplications = (userId, callback) => {

        let employeeId = [userId];
        console.log("Model employeeId " + employeeId);

        let getOwnLeaveQuery = "SELECT leave_application.id, leave_type.name AS leave_type, leave_application.start_date, leave_application.end_date, leave_status.name AS status FROM leave_application INNER JOIN leave_type ON (leave_application.leave_type_id = leave_type.id) INNER JOIN leave_status ON (leave_application.leave_status_id = leave_status.id) WHERE leave_application.employee_id = $1 ORDER BY leave_application.id DESC";

        dbPoolInstance.query(getOwnLeaveQuery, employeeId, (error, queryResult) => {

            if (error) {
                callback (error.message, null);
            } else {
                callback (null, queryResult.rows);
            }
        });
    };

    let createNewLeaveApplication = (inputs, callback) => {

        let newLeave = [inputs.employeeId, inputs.leaveTypeId, inputs.startDate, inputs.endDate, inputs.defaultStatus];

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
    };

    let getLeaveApplicationDetailsById = (id, callback) => {

        let selectedId = id;
        let getLeaveByIdQuery = "SELECT leave_application.id, leave_type.id AS leave_type_id, leave_type.name AS leave_type, leave_application.start_date, leave_application.end_date, leave_status.name AS status FROM leave_application INNER JOIN leave_type ON (leave_application.leave_type_id = leave_type.id) INNER JOIN leave_status ON (leave_application.leave_status_id = leave_status.id) WHERE leave_application.id = $1";

        dbPoolInstance.query(getLeaveByIdQuery, selectedId, (error, queryResult) => {
            console.log("HELLOOO MODEL getLeaveApplicationDetailsById");
            if (error) {
                console.log("There is an error querying for leave application by id.");
                callback(error, null);
            } else {
                callback(null, queryResult.rows);
            }
        });
    };

    let updateLeaveApplicationDetailsById = (inputs, callback) => {

        let newValues = [inputs.selectedLeaveApplicationId, inputs.leaveTypeId, inputs.startDate, inputs.endDate];

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
    };

    let getLeaveType = (callback) => {

        let getLeaveTypeQuery = "SELECT * FROM leave_type";

        dbPoolInstance.query(getLeaveTypeQuery, (error, queryResult) => {

            if (error) {
                callback(error, null);
            } else {
                callback(null, queryResult.rows);
            }
        });
    }

    /*let getLeaveEntitlement = (userId, callback) => {

        // Get current user ID
        let currentUserId = [userId];

        // Get entitled = leave entitlement
        let entitledLeaveQuery = "SELECT entitled_leave FROM employees WHERE id = $1";

        dbPoolInstance.query(entitledLeaveQuery, currentUserId, (error, entitledLeaveQueryResult) => {

            if (error) {
                callback (error.message, null);
            } else {
                let entitledLeave = entitledLeaveQueryResult.rows[0].entitled_leave;

                callback(null, entitledLeaveQueryResult.rows);
            }
        });
    };

    let getLeaveTaken = (userId, callback) => {

        // Get current user ID
        let currentUserId = [userId];

        // Get taken = count(leave taken and approved)
        let takenLeaveQuery = "SELECT count(*) AS approved_leave FROM leave_application WHERE employee_id = $1 AND leave_status_id = 2";

        dbPoolInstance.query(takenLeaveQuery, currentUserId, (error, takenLeaveQueryResult) => {

            if (error) {
                callback (error.message, null);
            } else {
                let approvedLeave = takenLeaveQueryResult.rows[0].approved_leave;

                callback(null, takenLeaveQueryResult.rows);
                console.log("In model, taken leave query result rows: ", takenLeaveQueryResult.rows[0].approved_leave);
            }
        });
    };*/


    return {
        getOwnLeaveApplications,
        createNewLeaveApplication,
        getLeaveApplicationDetailsById,
        updateLeaveApplicationDetailsById,
        getLeaveType
    };
};