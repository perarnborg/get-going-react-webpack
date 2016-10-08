var React = require('react');

var Typeahead = React.createClass({
  getInitialState: function() {
    return {value: this.props.value};
  },
  render: function() {
    return (
      <input id={'typeahead-' + this.props.id} className="typeahead" type="text" placeholder={this.props.placeholder} value={this.props.value} onChange={this.props.handleTextChange}/>
    );
  }
});

module.exports = Typeahead;
