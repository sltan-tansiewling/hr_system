module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let getAllStaffLeaveApplication = (request, response) => {

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
    };

    let getLeaveApplicationDetailsById = (request, response) => {

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

                    /*
                    * ======================================
                    * Check if URL path contains /edit, render to edit form so that don't need to repeat the method below
                    * =======================================
                    */

                } else {
                    response.send("There are no leave applications with this ID.");
                }
            }
        });
    };

    let getEditLeaveApplicationStatusById = (request, response) => {

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
    };

    let updateLeaveApplicationStatusById = (request, response) => {

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