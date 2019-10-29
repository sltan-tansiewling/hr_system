var React = require('react');
var DefaultLayout = require('../layouts/default');
var StaffNavbar = require('../layouts/staff_navbar');
var GlobalNavbar = require('../layouts/global_navbar');

class EditLeaveApplication extends React.Component {

    render () {

        let displayLeaveType = this.props.selectedLeaveType.map ((leaveType) => {

            return (

                <option value={leaveType.id}>{leaveType.name}</option>
            );
        });

        return (

            <DefaultLayout title="Staff - Edit Leave Application Details">
                <GlobalNavbar />
                <div class="main">
                    <StaffNavbar />
                    <div class=" col mainContent">
                        <h1>Edit Leave Application Details</h1>
                        <form method="POST" action={"/staff/leaveApplication/" + this.props.records[0].id + "?_method=PUT"}>
                            <div class="row">
                                <div class="col-25">
                                    <label for="id">ID: </label>
                                </div>
                                <div class="col-75">
                                    <p>{this.props.records[0].id}</p>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-25">
                                    <label for="leave_type">Leave Type: </label>
                                </div>
                                <div class="col-75">
                                    <select name="leave_type" value={this.props.records[0].leave_type_id}>
                                        {displayLeaveType}
                                    </select>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-25">
                                    <label for="start_date">Start Date: </label>
                                </div>
                                <div class="col-75">
                                    <input type="date" name="start_date" value={this.props.records[0].start_date} />
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-25">
                                    <label for="end_date">End Date: </label>
                                </div>
                                <div class="col-75">
                                    <input type="date" name="end_date" value={this.props.records[0].end_date} />
                                </div>
                            </div>

                            <div class="row">
                                <input type="submit" value="Update" />
                            </div>
                        </form>
                    </div>
                </div>
            </DefaultLayout>
        );
    };
};

module.exports = EditLeaveApplication;