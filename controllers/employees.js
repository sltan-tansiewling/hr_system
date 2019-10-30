module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let getLoginFormControllerCallback = (request, response) => {
        console.log ("I AM IN EMPLOYEE CONTROLLER after login!!");
        // response.render('employees/login');
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
                    console.log("Your role type ID is: " + userExists[0].role_type_id);

                    response.cookie('userId', userExists[0].id);
                    response.cookie('userRole', userExists[0].role_type_id);

                    switch(userExists[0].role_type_id) {
                        case 1:
                            response.redirect('/hr/leaveApplication');
                            break;
                        case 2:
                            response.send ("CONTROLLER I AM LOGGED IN!");
                            // response.redirect('/staff/leaveApplication');
                            break;
                        default:
                            response.send("Your role is not defined in the system yet.");
                            break;
                    }
                }
                else {
                    response.send("Your password doesn't match.");
                }

            } else {
                response.send("Your account does not exist. Please check with your HR.");
            }
        });
    };

    let getUserProfile = (request, response) => {
        let currentUserId = request.cookies["userId"];
        //let currentUserRole = request.cookies["userRole"];

        db.employees.getUserProfile (currentUserId, (error, userProfile) => {
            if (error) {
                console.log ("Error occurred: ", error.message);
            } else {
                console.log ("User profile retrieved.");

                const data = {
                    userInfo: userProfile
                };

                console.log(data.userInfo);

                switch (parseInt(request.cookies["userRole"])) {
                    case 1:
                        response.render('hr/hrProfile', data);
                        break;
                    case 2:
                        response.render('staff/staffProfile', data);
                        break;
                    default:
                        response.send("You are unauthorized to view or access this page.");
                        break;
                }

            }
        });
    };

    let logout = (request, response) => {
        response.clearCookie("userId");
        response.clearCookie("userRole");

        console.log("You have logged out successfully.");
        response.redirect("/");
    };

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        getLoginForm: getLoginFormControllerCallback,
        postLogin: postLoginControllerCallback,
        logout,
        getUserProfile
    };
};