var React = require('react');
var DefaultLayout = require('../layouts/default');
var StaffNavbar = require('../layouts/staff_navbar');
var GlobalNavbar = require('../layouts/global_navbar');

class StaffUserProfile extends React.Component {

    render() {
        return (

            <DefaultLayout title="User Profile">
                <GlobalNavbar />
                <div class="main">
                    <StaffNavbar />
                    <div class="col mainContent">
                        <h1>User Profile</h1>
                        <form method="GET">

                            <div class="row">
                                <div class="col-25">
                                    <label for="name">Name: </label>
                                </div>
                                <div class="col-75">
                                    <p>{this.props.userInfo[0].name}</p>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-25">
                                    <label for="dept">Department: </label>
                                </div>
                                <div class="col-75">
                                    <p>{this.props.userInfo[0].dept}</p>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-25">
                                    <label for="join-since">Joined Since: </label>
                                </div>
                                <div class="col-75">
                                    <p>{this.props.userInfo[0].join_since}</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </DefaultLayout>
        );
    };
};

module.exports = StaffUserProfile;