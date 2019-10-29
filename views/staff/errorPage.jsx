var React = require('react');
var DefaultLayout = require('../layouts/default');
var StaffNavbar = require('../layouts/staff_navbar');
var GlobalNavbar = require('../layouts/global_navbar');

class EditLeaveApplication extends React.Component {

    render () {

        return (

            <DefaultLayout title="Staff - Edit Leave Application Details">
                <GlobalNavbar />
                <div class="main">
                    <StaffNavbar />
                    <div class=" col mainContent">
                        <p class="error-msg">{this.props.errorMsg}</p>
                    </div>
                </div>
            </DefaultLayout>
        );
    };
};

module.exports = EditLeaveApplication;