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
   */
  'handleClick': function onHandleClick () {
    this.props.handleClick(this.props.rowIndex);
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
   * Current box inside Row click
   * @param  {Number} index
   */
  'handleClick': function onHandleClick () {
    //next step: 12
  },
  /**
   * render some Box component
   * @return {ReactElement}
   */
  'render': function onRender () {
    var boxes = this.props.values.map(function onMap (value, index) {
      return (
        <Box value={value} key={index} rowIndex={index} handleClick={this.handleClick}/>
      );
    }.bind(this));

    return (
      <div>
        {boxes}
      </div>
    );
  }
});

var Grid = React.createClass({
  /**
   * get the initial state of the Row
   * @return {Object} [description]
   */
  'getInitialState': function onGetInitialState () {
    return {
      'values': [
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-']
      ]
    };
  },
  /**
   * render some Row component
   * @return {ReactElement}
   */
  'render': function onRender () {
    var rows = this.state.values.map(function onMap (row, index){
      return (
        <Row key={index} values={row} gridIndex={index}/>
      )
    }.bind(this));

    return (
      <div>
        {rows}
      </div>
    );
  }
});

React.render(<Grid/>, document.body);
