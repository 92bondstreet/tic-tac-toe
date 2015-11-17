'use strict';

var React = require('react');

var Box = React.createClass({

  getInitialState: function() {
    return {value: this.props.initialValue};
  },

  render: function onRender() {
    return (<button>{this.state.value}</button>);
  },
  
  componentWillMount: function() {
    var t=this;
	var val=this.state.value;
    setTimeout(function(){t.setState({value: val==='X'?'O':'X'});t.componentWillMount();},time);
  },
  
});

var boxStyle = {
  height: '100px',
  width: '100px'
};

var initialVal = 'X';
var time = 300;

React.render(<Box initialValue={initialVal} style={boxStyle}/>, document.body);