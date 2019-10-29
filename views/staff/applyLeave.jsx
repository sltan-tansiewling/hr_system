var React = require('react');
var DefaultLayout = require('../layouts/default');
var StaffNavbar = require('../layouts/staff_navbar');
var GlobalNavbar = require('../layouts/global_navbar');

class ApplyLeave extends React.Component {
    render() {
        return (
            <DefaultLayout title="Staff: Apply Leave">
                <GlobalNavbar />
                <StaffNavbar />
                <div class="col mainContent">
                    <h1>Apply New Leave</h1>
                    <form method="POST" action="/staff/leaveApplication">

                        <div class="row">
                            <div class="col-25">
                                <label for="leave_type">Leave Type: </label>
                            </div>
                            <div class="col-75">
                                <input type="text" name="leave_type" />
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-25">
                                <label for="start_date">Start Date: </label>
                            </div>
                            <div class="col-75">
                                <input type="date" name="start_date" />
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-25">
                                <label for="end_date">End Date: </label>
                            </div>
                            <div class="col-75">
                                <input type="date" name="end_date" />
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

module.exports = ApplyLeave;