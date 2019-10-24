var React = require('react');

class EditLeaveApplication extends React.Component {

    render () {

        return (
            <html>
                <head>
                    <title>Staff - Edit Leave Application Details</title>
                </head>
                <body>
                    <h1>Edit Leave Application Details</h1>
                    <form method="POST" action={"/staff/leaveApplication/" + this.props.records[0].id + "?_method=PUT"}>
                        ID: <input type="text" name="id" value={this.props.records[0].id} readOnly />
                        <br />
                        Leave Type: <input type="text" name="leave_type" value={this.props.records[0].leave_type} />
                        <br />
                        Start Date: <input type="text" name="start_date" value={this.props.records[0].start_date} />
                        <br />
                        End Date: <input type="text" name="end_date" value={this.props.records[0].end_date} />
                        <br />
                        <input type="submit" value="Update" />
                    </form>
                </body>
            </html>
        );
    };
};

module.exports = EditLeaveApplication;