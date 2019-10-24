var React = require('react');

class EditLeaveApplication extends React.Component {

    render () {

        return (
            <html>
            <head>
                <title>HR - View Staff Leave Application Details</title>
            </head>
            <body>
                <h1>Staff Leave Application Details</h1>
                <form method="POST" action={"/hr/leaveApplication/" + this.props.records[0].id + "?_method=PUT"}>
                    ID: <input type="text" name="id" value={this.props.records[0].id} readOnly />
                    <br />
                    Employee: <input type="text" name="employee_name" value={this.props.records[0].employee_name} readOnly />
                    <br />
                    Leave Type: <input type="text" name="leave_type" value={this.props.records[0].leave_type} readOnly />
                    <br />
                    Start Date: <input type="text" name="start_date" value={this.props.records[0].start_date} readOnly />
                    <br />
                    End Date: <input type="text" name="end_date" value={this.props.records[0].end_date} readOnly />
                    <br />
                    Status: <input type="text" name="status" value={this.props.records[0].status} />
                    <br />
                    <input type="submit" value="Update" />
                </form>
            </body>
            </html>
        );
    };
};

module.exports = EditLeaveApplication;