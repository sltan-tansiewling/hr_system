module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
    let getAllLeaveApplication = (request,response) => {

        let userId = parseInt(request.cookies["userId"]);

        db.staff.getOwnLeaveApplications (userId, (error, queryResult) => {

            if (error) {
                console.log(error.message);
            } else {
                const data = {
                    records: queryResult
                };

                response.render('staff/allLeaveApplication', data);
            }
        });
     };

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
                response.redirect("/staff/leaveApplication");
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
        createLeaveApplication,
        getAllLeaveApplication
    };
};