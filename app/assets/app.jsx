'use strict';

require('styles/app.scss');

var React = require('react');
var ReactDOM = require('react-dom');

var ColorPicker = require('components/ColorPicker');

ReactDOM.render(<ColorPicker />, document.getElementById('js-app'));
