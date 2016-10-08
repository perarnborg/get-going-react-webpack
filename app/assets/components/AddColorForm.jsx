var React = require('react');

var Typeahead = require('components/Typeahead');

var AddColorForm = React.createClass({
  getInitialState: function() {
    return {newColor: null, text: '', colors: this.props.colors};
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  setColor: function(color) {
    this.setState({newColor: color});
  },
  addColor: function(e) {
    e.preventDefault();
    if(this.state.newColor) {
      this.state.newColor.chosen = true;
      this.setState({newColor: null, text: ''});
      this.props.setColors(this.state.colors);
    }
  },
  render: function() {
    return (
      <form onSubmit={this.addColor}>
        <Typeahead id="color-picker" label="name" options={this.state.colors.filter(function(c){return !c.chosen;})} placeholder="Add a new color" value={this.state.text} handleTextChange={this.handleTextChange} update={this.setColor}/>

        <button type="submit">Add</button>
      </form>
    );
  }
});

module.exports = AddColorForm;
