var React = require('react');

class ApplyLeave extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>Staff: Apply Leave</title>
                </head>
                <body>
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
                </body>
            </html>
        );
    };
};

module.exports = ApplyLeave;