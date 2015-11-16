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
   * get the initial state of the Row
   * @return {Object} [description]
   */
  'getInitialState': function onGetInitialState () {
    return {
      'values': ['-', '-', '-']
    };
  },
  /**
   * Current box inside Row click
   * @param  {Number} index
   */
  'handleClick': function onHandleClick (index) {
    var values = this.state.values;
    var currentValue = values[index] === 'X' ? 'O' : 'X';

    values[index] = currentValue;

    this.setState({
      'values': values
    });
  },
  /**
   * render some Box component
   * @return {ReactElement}
   */
  'render': function onRender () {
    var boxes = this.state.values.map(function(value, index){
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
   * render some Row component
   * @return {ReactElement}
   */
  render: function onRender () {
    return (
      <div>
        <Row/>
        <Row/>
        <Row/>
      </div>
    );
  }
})


React.render(<Grid/>, document.body);
