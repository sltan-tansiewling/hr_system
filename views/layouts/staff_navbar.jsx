var React = require('react');

class StaffNavbar extends React.Component {

    render () {

        return (
                <div class="col navBar">
                    <ul>
                        <li>
                            <a href="/staff/leaveApplication">
                                View All Leave Applications
                            </a>
                        </li>
                        <li>
                            <a href="/staff/leaveApplication/new">
                                New Leave Application
                            </a>
                        </li>
                    </ul>
                </div>
        );
    };
};

module.exports = StaffNavbar;