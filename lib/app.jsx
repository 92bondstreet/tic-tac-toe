'use strict';

var React = require('react');

var boxStyle = {
  'height': '100px',
  'width': '100px'
};

var Box = React.createClass({
  'getInitialState': function onGetInitialState () {
    return {
      'value': this.props.initialValue
    };
  },
  'render': function onRender () {
    return (
      <button style={boxStyle}>{this.state.value}</button>
    );
  }
});

React.render(<Box initialValue={'X'}/>, document.body);
