var React = require('react');

class HRNavbar extends React.Component {

    render () {

        return (

            <div class="col navBar">
                <ul>
                    <li>
                        <a href="/hr/leaveApplication">
                            View All Leave Applications
                        </a>
                    </li>
                </ul>
            </div>
        );
    };
};

module.exports = HRNavbar;