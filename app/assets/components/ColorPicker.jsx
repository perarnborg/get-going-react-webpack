var React = require('react');

var Color = require('components/Color');
var AddColorForm = require('components/AddColorForm');

var ColorPicker = React.createClass({
  colors: [{id: 1, name: 'Red', chosen: true}, {id: 2, name: 'Orange', chosen: false}, {id: 3, name: 'Yellow', chosen: false}, {id: 4, name: 'Cyan', chosen: false}, {id: 5, name: 'Blue', chosen: false}, {id: 6, name: 'Green', chosen: false}],
  getInitialState: function() {
    return {colors: this.colors};
  },
  setColors: function(colors) {
    console.log(colors);
    this.setState({colors: colors});
  },
  render: function() {
    var chosenColors = this.state.colors
      .filter(function(c) {return c.chosen;})
      .map(function(color) {
        return (
          <Color color={color.name} key={color.id}>
            Color: {color.name}
          </Color>
        );
    });
    return (
      <div className="color-picker">
        <h1>Chosen colors</h1>

        <ul>
          {chosenColors}
        </ul>

        <AddColorForm colors={this.state.colors} setColors={this.setColors}></AddColorForm>

      </div>
    );
  }
});

module.exports = ColorPicker;
