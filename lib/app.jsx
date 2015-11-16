'use strict';

var React = require('react');

var Box = React.createClass({
  'render': function onRender () {
    return (
      <button>{this.props.value}</button>
    );
  }
});

React.render(<Box value='X'/>, document.body);
