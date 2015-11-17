'use strict';

var React = require('react');

var Box = React.createClass({
  'render': function onRender () {
    return (
      <button>{this.props.value}</button>
    );
  }
});

var BoxStyle = {
  height: '100px',
  width: '100px'
};

React.render(<Box value="X" style={BoxStyle}/>, document.body);
