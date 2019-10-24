var React = require('react');
var DefaultLayout = require('../layouts/default');

class LeaveApplication extends React.Component {

    render () {

        return (

            <DefaultLayout title="Staff - View Leave Application Details">
                <h1>Leave Application Details</h1>
                <form method="GET">
                    ID: <input type="text" name="id" value={this.props.records[0].id} readOnly />
                    <br />
                    Leave Type: <input type="text" name="leave_type" value={this.props.records[0].leave_type} readOnly />
                    <br />
                    Start Date: <input type="text" name="start_date" value={this.props.records[0].start_date} readOnly />
                    <br />
                    End Date: <input type="text" name="end_date" value={this.props.records[0].end_date} readOnly />
                    <br />
                    Status: <input type="text" name="status" value={this.props.records[0].status} readOnly />
                </form>
                <a href={"/staff/leaveApplication/" + this.props.records[0].id + "/edit"}>Edit</a>
            </DefaultLayout>
        );
    };
};

module.exports = LeaveApplication;