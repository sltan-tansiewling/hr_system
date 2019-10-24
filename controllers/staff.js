module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
     let getNewLeaveApplicationForm = (request,response) => {
        response.render('staff/applyLeave');
     };

     let createLeaveApplication = (request, response) => {

        // Read cookie user ID
        let currentUserId = request.cookies["userId"];
        console.log("Read user id from request cookies " + currentUserId);

        let newLeaveValues = {
            employeeId: currentUserId,
            leaveType: request.body.leave_type,
            startDate: request.body.start_date,
            endDate: request.body.start_date,
            defaultStatus: 1
        };

        db.staff.createNewLeaveApplication (newLeaveValues, (error, queryResult) => {

            if (error) {
                console.log("Controller: ", error.message);
            } else {
                response.send(newLeaveValues);
            }
        });
     };


    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        getNewLeaveApplicationForm,
        createLeaveApplication
    };
};