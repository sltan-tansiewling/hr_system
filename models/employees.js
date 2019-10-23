/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    let checkUserExists = (username, callback) => {

        let userInputUsername = [username];
        console.log("In model, username is " + userInputUsername);

        let checkUserExistsQuery = "SELECT * from employees WHERE username = $1";

        dbPoolInstance.query(checkUserExistsQuery, userInputUsername, (error, queryResult) => {

            if (error) {
                console.log("There is error querying for user role.");
                console.log(error.message);
            } else {
                callback(null, queryResult.rows);
            }
        });
    };

    return {
        checkUserExists
    };
};