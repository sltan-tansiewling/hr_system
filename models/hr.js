/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    let getStaffLeaveApplications = (callback) => {

        let getStaffLeaveApplicationsQuery = "SELECT leave_application.id, employees.name AS employee_name, leave_type.name AS leave_type, leave_application.start_date, leave_application.end_date, leave_status.name AS status FROM leave_application INNER JOIN employees ON (leave_application.employee_id = employees.id) INNER JOIN leave_type ON (leave_application.leave_type_id = leave_type.id) INNER JOIN leave_status ON (leave_application.leave_status_id = leave_status.id)";

        dbPoolInstance.query(getStaffLeaveApplicationsQuery, (error, queryResult) => {

            if (error) {

                console.log("There is an error querying for leave application.");

                callback(error, null);

            } else {

                callback(null, queryResult.rows);

            }
        });
    };

    return {
        getStaffLeaveApplications
    };
};