var React = require('react');
var DefaultLayout = require('../layouts/default');

class GlobalNavbar extends React.Component {
    render() {

        return (
            <div class="global-nav">
                        <div class="logo">
                            <img class="logo-img" src="/hr_logo.png" />
                        </div>
                        <div class="right">
                            <div class="profile">
                                <img class="profile-img" src="/user_profile.png" />
                            </div>
                            <div class="logout">
                                <a href="/logout">
                                    <img class="logout-img" src="/logout.png" />
                                </a>
                            </div>
                        </div>
                    </div>
        );
    };
};

module.exports = GlobalNavbar;