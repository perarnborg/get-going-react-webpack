var React = require('react');

var Color = React.createClass({
  render: function() {
    return (
      <div className="color" style={{color: this.props.color}}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Color;
