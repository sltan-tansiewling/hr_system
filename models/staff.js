/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

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

    return {
        createNewLeaveApplication
    };
};