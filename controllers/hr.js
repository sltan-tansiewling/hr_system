module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let getAllStaffLeaveApplication = (request, response) => {

        db.hr.getStaffLeaveApplications ((error, leaveApplications) => {

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

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        getAllLeaveApplication: getAllStaffLeaveApplication
    };
};