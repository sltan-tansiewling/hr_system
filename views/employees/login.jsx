var React = require('react');
var DefaultLayout = require('../layouts/default');

class Login extends React.Component {

    render() {
        return (

            <DefaultLayout title="HR System - Login">
                <div class="loginContainer">
                    <h1>Login</h1>
                    <form method="POST" action="/login">

                        <div class="row">
                            <div class="col-25">
                                <label for="username">Username: </label>
                            </div>
                            <div class="col-75">
                                <input type="text" name="username" />
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-25">
                                <label for="password">Password: </label>
                            </div>
                            <div class="col-75">
                                <input type="password" name="password" />
                            </div>
                        </div>

                        <div class="row">
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>

            </DefaultLayout>
        );
    };
};

module.exports = Login;