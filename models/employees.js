/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    let checkUserRole = (username, callback) => {

        let userInputUsername = [username];
        console.log("In model, username is " + userInputUsername);

        let checkUserRoleQuery = "SELECT role_type_id from employees WHERE username = $1";

        dbPoolInstance.query(checkUserRoleQuery, userInputUsername, (error, queryResult) => {

            if (error) {
                console.log("There is error querying for user role.");
                console.log(error.message);
            } else {
                callback(null, queryResult);
            }
        });
    };

    return {
        checkUserRole
    };
};