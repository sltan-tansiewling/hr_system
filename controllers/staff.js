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

        db.staff.getLeaveType((error, leaveType) => {
            if (error) {
                console.log("Error occurred");
            } else {
                console.log("Controller: All leave type retrieved successfully!");

                const data = {
                    records: leaveType
                };

                response.render('staff/applyLeave', data);
            }
        });
     };

     let createLeaveApplication = (request, response) => {

        // Read cookie user ID
        let currentUserId = request.cookies["userId"];
        console.log("Read user id from request cookies " + currentUserId);

        let newLeaveValues = {
            employeeId: currentUserId,
            leaveTypeId: request.body.leave_type,
            startDate: request.body.start_date,
            endDate: request.body.end_date,
            defaultStatus: 1
        };

        db.staff.createNewLeaveApplication (newLeaveValues, (error, queryResult) => {

            if (error) {
                console.log("Controller: ", error.message);
            } else {
                console.log("Leave created successfully!");
                response.redirect("/staff/leaveApplication/");
            }
        });


     };

     let getLeaveApplicationById = (request, response) => {

        let selectedLeaveApplicationId = [request.params.id];

        db.staff.getLeaveApplicationDetailsById(selectedLeaveApplicationId, (error, leaveApplicationDetails) => {

            if (error) {
                console.log("Error occurred");
            } else {

                if (leaveApplicationDetails.length > 0) {

                    const data = {
                        records: leaveApplicationDetails
                    };

                    response.render('staff/leaveApplicationById', data);

                } else {
                    response.send("There are no leave applications with this ID.");
                }
            }
        });
     };

     let getEditLeaveApplicationById = (request, response) => {

        let selectedLeaveApplicationId = [request.params.id];

        db.staff.getLeaveApplicationDetailsById(selectedLeaveApplicationId, (error, leaveApplicationDetails) => {

            if (error) {
                console.log("Error occurred");
            } else {

                if (leaveApplicationDetails.length > 0) {

                    const data = {
                        records: leaveApplicationDetails
                    };
                    response.render('staff/editLeaveApplicationById', data);

                } else {
                    response.send("There are no leave applications with this ID.");
                }
            }
        });
    };

    let updateLeaveApplicationById = (request, response) => {

        let selectedLeaveApplicationId = parseInt(request.params.id);
        console.log("Controller: Selected Leave Appl ID is " + selectedLeaveApplicationId);

        let updatedLeave = {
            selectedLeaveApplicationId: parseInt(request.params.id),
            leaveType: request.body.leave_type,
            startDate: request.body.start_date,
            endDate: request.body.end_date
        };

        console.log("Controller: Updated Leave: ", updatedLeave);

        db.staff.updateLeaveApplicationDetailsById(updatedLeave, (error, leaveApplicationDetails) => {

            if (error) {
                console.log("Error occurred");
            } else {
                console.log("Controller: Update successful!");
                response.redirect("/staff/leaveApplication/");
            }
        });
    };

/*    let getLeaveEntitlement = (request, response) => {

        // Read cookie user ID
        let currentUserId = request.cookies["userId"];

        let leaveEntitlement;

        db.staff.getLeaveEntitlement (currentUserId, (error, leaveEntitlementQueryResult) => {

            if (error) {
                console.log("Error occurred");
            } else {
                console.log("Controller: Query successful!");

                leaveEntitlement = leaveEntitlementQueryResult[0].entitled_leave;
                console.log("In controller, entitled leave: " + leaveEntitlement);
            }
        });
        return leaveEntitlement;
    };

    let getLeaveTaken = (request, response) => {

        // Read cookie user ID
        let currentUserId = request.cookies["userId"];

        let leaveTaken;

        db.staff.getLeaveTaken (currentUserId, (error, leaveTakenQueryResult) => {

            if (error) {
                console.log("Error occurred");
            } else {
                console.log("Controller: Query successful!");

                leaveTaken = leaveTakenQueryResult[0].approved_leave;
                console.log("In controller, leave taken: " + leaveTaken);
            }
        });

        return leaveTaken;
    };*/


    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        getAllLeaveApplication,
        getNewLeaveApplicationForm,
        createLeaveApplication,
        getLeaveApplicationById,
        getEditLeaveApplicationById,
        updateLeaveApplicationById
    };
};