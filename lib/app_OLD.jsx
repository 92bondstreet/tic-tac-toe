'use strict';

var React = require('react');

var Box = React.createClass({

  getInitialState: function() {
    return {value: this.props.initialValue};
  },

  render: function onRender () {
    return (
      <button>{this.state.value}</button>
    );
  }
  
});

var BoxStyle = {
  height: '100px',
  width: '100px'
};

var initialVal = 'X';

React.render(<Box initialValue={initialVal} style={BoxStyle}/>, document.body);