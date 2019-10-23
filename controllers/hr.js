module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let getAllStaffLeaveApplication = (request, response) => {

        response.send("You are viewing all staff leave application.");
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