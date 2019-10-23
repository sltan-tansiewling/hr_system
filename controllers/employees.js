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

        // Get user input
        let userInputUsername = request.body.username;
        let userInputPassword = request.body.password;

        // Check the role of the user logged in
        db.employees.checkUserExists(userInputUsername, (error, userExists) => {

            if (userExists.length > 0) {
                console.log("Valid account. You are logged in!");

                // Check if password matches
                if (userExists[0].password === userInputPassword) {

                    // If password match, check user role type ID
                    response.send("Your role type ID is: " + userExists[0].role_type_id);
                }

                else {
                    response.send("Your password doesn't match.");
                }

            } else {
                response.send("Your account does not exist. Please check with your HR.");
            }
        });
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