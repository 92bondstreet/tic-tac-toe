'use strict';

var React = require('react');

var boxStyle = {
  'height': '100px',
  'width': '100px'
};

var Box = React.createClass({
  /**
   * get the initial state of Box
   * @return {Object} [description]
   */
  'getInitialState': function onGetInitialState () {
    return {
      'value': this.props.initialValue
    };
  },
  /**
   * Box click callback
   * @return {[type]} [description]
   */
  'handleClick': function onHandleClick () {
    this.setState({
      'value': this.state.value === 'X' ? 'O' : 'X'
    });
  },
  /**
   * render the button HTML Element
   * @return {ReactElement}
   */
  'render': function onRender () {
    return (
      <button style={boxStyle} onClick={this.handleClick}>{this.state.value}</button>
    );
  }
});

React.render(<Box initialValue={'X'}/>, document.body);
