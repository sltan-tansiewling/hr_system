module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let getLoginFormControllerCallback = (request, response) => {

        response.render('employees/login');
    };

    let postLoginControllerCallback = (request, response) => {

        response.send("You have logged in!");
    };

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        getLoginForm: getLoginFormControllerCallback,
        postLogin: postLoginControllerCallback
    };
};