var React = require('react');
var DefaultLayout = require('../layouts/default');
var StaffNavbar = require('../layouts/staff_navbar');

class ApplyLeave extends React.Component {
    render() {
        return (
            <DefaultLayout title="Staff: Apply Leave">
                <StaffNavbar />
                <h1>Apply New Leave</h1>
                <form method="POST" action="/staff/leaveApplication">
                    Leave Type: <input type="text" name="leave_type" />
                    <br />
                    Start Date: <input type="text" name="start_date" />
                    <br />
                    End Date: <input type="text" name="end_date" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </DefaultLayout>
        );
    };
};

module.exports = ApplyLeave;