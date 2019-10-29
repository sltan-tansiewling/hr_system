/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    let getStaffLeaveApplications = (callback) => {

        let getStaffLeaveApplicationsQuery = "SELECT leave_application.id, employees.name AS employee_name, leave_type.name AS leave_type, leave_application.start_date, leave_application.end_date, leave_status.name AS status FROM leave_application INNER JOIN employees ON (leave_application.employee_id = employees.id) INNER JOIN leave_type ON (leave_application.leave_type_id = leave_type.id) INNER JOIN leave_status ON (leave_application.leave_status_id = leave_status.id) ORDER BY leave_application.id DESC";

        dbPoolInstance.query(getStaffLeaveApplicationsQuery, (error, queryResult) => {

            if (error) {
                console.log("There is an error querying for leave application.");
                callback(error, null);
            } else {
                callback(null, queryResult.rows);
            }
        });
    };

    let getStaffLeaveApplicationById = (id, callback) => {

        let selectedId = id;
        let getStaffLeaveIdQuery = "SELECT leave_application.id, employees.name AS employee_name, leave_type.name AS leave_type, leave_application.start_date, leave_application.end_date, leave_status.name AS status, leave_status.id AS leave_status_id FROM leave_application INNER JOIN employees ON (leave_application.employee_id = employees.id) INNER JOIN leave_type ON (leave_application.leave_type_id = leave_type.id) INNER JOIN leave_status ON (leave_application.leave_status_id = leave_status.id) WHERE leave_application.id = $1";

        dbPoolInstance.query(getStaffLeaveIdQuery, selectedId, (error, queryResult) => {

            if (error) {
                console.log("There is an error querying for leave application by id.");
                callback(error, null);
            } else {
                callback(null, queryResult.rows);
            }
        });
    };

    let updateStaffLeaveApplicationStatusById = (inputs, callback) => {

        let newValues = [inputs.newStatus, inputs.selectedLeaveApplicationId];
        console.log("Model: New values is ", newValues);

        let updateStatusQuery = "UPDATE leave_application SET leave_status_id = $1 WHERE id = $2";

        dbPoolInstance.query(updateStatusQuery, newValues, (error, queryResult) => {

            if (error) {
                console.log("There is an error updating leave application status.");
                console.log(error.message);
                callback(error, null);
            } else {
                callback(null, queryResult.rows);
                console.log("Model: Update successful!");
            }
        });
    };

    let getLeaveStatus = (callback) => {

        let getLeaveStatusQuery = "SELECT * FROM leave_status";

        dbPoolInstance.query(getLeaveStatusQuery, (error, queryResult) => {

            if (error) {
                callback(error, null);
            } else {
                callback(null, queryResult.rows);
            }

        });
    };

    return {
        getStaffLeaveApplications,
        getStaffLeaveApplicationById,
        updateStaffLeaveApplicationStatusById,
        getLeaveStatus
    };
};