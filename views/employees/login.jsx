var React = require('react');

class Login extends React.Component {

    render() {
        return (
            <html>
            <head>
                <title>HR System - Login</title>
            </head>

            <body>
                <h1>Login</h1>
                <form method="POST" action="/login">
                    Username: <input type="text" name="username" />
                    <br />
                    Password: <input type="password" name="password" />
                    <br />
                    <input type="submit" value="Login" />
                </form>
            </body>
            </html>
        );
    };
};

module.exports = Login;