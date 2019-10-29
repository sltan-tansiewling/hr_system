var React = require('react');
var DefaultLayout = require('../layouts/default');

class GlobalNavbar extends React.Component {
    render() {

        return (
            <div class="global-nav">
                <div class="logo">
                    <img class="logo-img" src="/hr_logo.png" />
                    <span>HUMAN RESOURCE MANAGEMENT SYSTEM</span>
                </div>
                <div class="right">
                    <div class="profile">
                        <a href="/profile">
                            <img class="profile-img" src="/user_profile.png" />
                            <p>
                                User Profile
                            </p>
                        </a>

                    </div>
                    <div class="logout">
                        <a href="/logout">
                            <img class="logout-img" src="/logout.png" />
                            <p>
                                Logout
                            </p>
                        </a>

                    </div>
                </div>
            </div>
        );
    };
};

module.exports = GlobalNavbar;