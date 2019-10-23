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

                } else {
                    response.send("There are no leave applications with this ID.");
                }

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
        getLeaveApplicationById: getLeaveApplicationDetailsById
    };
};