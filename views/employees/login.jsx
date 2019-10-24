var React = require('react');
var DefaultLayout = require('../layouts/default');

class Login extends React.Component {

    render() {
        return (

            <DefaultLayout title="HR System - Login">
                <h1>Login</h1>
                <form method="POST" action="/login">
                    Username: <input type="text" name="username" />
                    <br />
                    Password: <input type="password" name="password" />
                    <br />
                    <input type="submit" value="Login" />
                </form>
            </DefaultLayout>
        );
    };
};

module.exports = Login;