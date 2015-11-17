'use strict';

var React = require('react');

var Box = React.createClass({

  getInitialState: function() {
    return {value: this.props.initialValue};
  },

  render: function onRender() {
    return (<button onclick={this.click}>{this.state.value}</button>);
  },
  
  click: function() {
    this.setState({value: this.state.value==='X'?'O':'X'});
  },
  
});

var boxStyle = {
  height: '100px',
  width: '100px'
};

var initialVal = 'X';
var time = 300;

React.render(<Box initialValue={initialVal} style={boxStyle}/>, document.body);