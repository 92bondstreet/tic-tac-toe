'use strict';

var React = require('react');

var boxStyle = {
  'height': '100px',
  'width': '100px'
};
var ALTERNANCE_MS = 300;

var Box = React.createClass({
  'getInitialState': function onGetInitialState () {
    return {
      'value': this.props.initialValue
    };
  },
  'componentWillMount': function onComponentWillMount () {
    var self = this;

    this.timer = setInterval(function onTimer () {
      self.setState({
        'value': self.state.value === 'X' ? 'O' : 'X'
      });
    }, ALTERNANCE_MS);
  },
  'componentWillUnmount': function onComponentWillUnmount () {
    clearInterval(this.timer);
  },
  'render': function onRender () {
    return (
      <button style={boxStyle}>{this.state.value}</button>
    );
  }
});

React.render(<Box initialValue={'X'}/>, document.body);
