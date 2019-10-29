module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let getAllStaffLeaveApplication = (request, response) => {

        // Check user role
        let currentUserRole = request.cookies["userRole"];
        console.log("Current user role: " + currentUserRole);

        switch(parseInt(currentUserRole)) {
            case 1: // User is HR

                db.hr.getStaffLeaveApplications((error, leaveApplications) => {

                    if (error) {
                        console.log("Error occurred");
                    } else {

                        if (leaveApplications.length > 0) {

                            const data = {
                                records: leaveApplications
                            };
                            response.render('hr/leaveApplication', data);

                        } else {
                            response.send("There are no leave applications.");
                        }
                    }
                });

                break;

            case 2: // User is not HR

                response.status(403).send("You are unauthorized to view this page.");
                break;

            default: // There is no user role type detected

                response.status(403).send("You are unauthorized to view this page.");
                break;
        }


    };

    let getLeaveApplicationDetailsById = (request, response) => {

        // Check user role
        let currentUserRole = request.cookies["userRole"];
        console.log("Current user role: " + currentUserRole);

        switch(parseInt(currentUserRole)) {
            case 1: // User is HR

                let selectedLeaveApplicationId = [request.params.id];

                db.hr.getStaffLeaveApplicationById(selectedLeaveApplicationId, (error, leaveApplicationDetails) => {

                    if (error) {
                        console.log("Error occurred");
                    } else {

                        if (leaveApplicationDetails.length > 0) {

                            const data = {
                                records: leaveApplicationDetails
                            };
                            response.render('hr/leaveApplicationById', data);

                        } else {
                            response.send("There are no leave applications with this ID.");
                        }
                    }
                });

                break;

            case 2: // User is not HR

                response.status(403).send("You are unauthorized to view this page.");
                break;

            default: // There is no user role type detected

                response.status(403).send("You are unauthorized to view this page.");
                break;
        }

    };

    let getEditLeaveApplicationStatusById = (request, response) => {

        // Check user role
        let currentUserRole = request.cookies["userRole"];
        console.log("Current user role: " + currentUserRole);

        switch(parseInt(currentUserRole)) {
            case 1: // User is HR

                let selectedLeaveApplicationId = [request.params.id];

                db.hr.getStaffLeaveApplicationById(selectedLeaveApplicationId, (error, leaveApplicationDetails) => {

                    if (error) {
                        console.log("Error occurred");
                    } else {

                        if (leaveApplicationDetails.length > 0) {

                            db.hr.getLeaveStatus ((error, leaveStatus) => {

                                const data = {
                                    records: leaveApplicationDetails,
                                    selectedLeaveStatus: leaveStatus
                                };
                                console.log(data.records);
                                response.render('hr/editLeaveApplicationById', data);
                            });

                        } else {
                            response.send("There are no leave applications with this ID.");
                        }
                    }
                });

                break;

            case 2: // User is not HR

                response.status(403).send("You are unauthorized to view this page.");
                break;

            default: // There is no user role type detected

                response.status(403).send("You are unauthorized to view this page.");
                break;
        }

    };

    let updateLeaveApplicationStatusById = (request, response) => {

        // Check user role
        let currentUserRole = request.cookies["userRole"];
        console.log("Current user role: " + currentUserRole);

        switch(parseInt(currentUserRole)) {
            case 1: // User is HR
                let newValues = {
                    newStatus: request.body.status,
                    selectedLeaveApplicationId: parseInt(request.params.id)
                };

                console.log("Controller: New Values: ", newValues);

                db.hr.updateStaffLeaveApplicationStatusById(newValues, (error, leaveApplicationDetails) => {

                    if (error) {
                        console.log("Error occurred");
                    } else {
                        console.log("Controller: Update successful!");
                        response.redirect("/hr/leaveApplication/" + newValues.selectedLeaveApplicationId);
                    }
                });

                break;

            case 2: // User is not HR

                response.status(403).send("You are unauthorized to view this page.");
                break;

            default: // There is no user role type detected

                response.status(403).send("You are unauthorized to view this page.");
                break;
        }
    };



    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        getAllLeaveApplication: getAllStaffLeaveApplication,
        getLeaveApplicationById: getLeaveApplicationDetailsById,
        getEditLeaveApplicationById: getEditLeaveApplicationStatusById,
        updateLeaveApplicationById: updateLeaveApplicationStatusById
    };
};