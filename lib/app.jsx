'use strict';

var React = require('react');

var boxStyle = {
  'height': '100px',
  'width': '100px'
};

/**
 * Define the Box component
 * @class Box
 */
var Box = React.createClass({
  /**
   * Box click callback
   * @return {[type]} [description]
   */
  'handleClick': function onHandleClick () {
    this.setState({
      'value': this.props.value === 'X' ? 'O' : 'X'
    });
  },
  /**
   * render the button HTML Element
   * @return {ReactElement}
   */
  'render': function onRender () {
    return (
      <button style={boxStyle} onClick={this.handleClick}>{this.props.value}</button>
    );
  }
});

var Row = React.createClass({
  /**
   * get the initial state of the Row
   * @return {Object} [description]
   */
  'getInitialState': function onGetInitialState () {
    return {
      'values': ['-', '-', '-']
    };
  },
  /**
   * render some Box component
   * @return {ReactElement}
   */
  'render': function onRender () {
    var boxes = this.state.values.map(function(value, index){
      return (
        <Box value={value} key={index} rowIndex={index} />
      );
    });
    return (
      <div>
        {boxes}
      </div>
    );
  }
});

React.render(<Row/>, document.body);
