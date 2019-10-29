var React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
            <link rel="stylesheet" href="/style.css" type="text/css" />
            <title>{this.props.title}</title>
        </head>
        <body>
            {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;