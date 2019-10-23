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

        // Get the username of the logged in user
        let userInputUsername = request.body.username;
        console.log("In controller, the username is: " + userInputUsername);

        // Check the role of the user logged in
        db.employees.checkUserRole(userInputUsername, (error, queryResult) => {

            response.send(queryResult.rows);
        });

        // response.send("You have logged in!");
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