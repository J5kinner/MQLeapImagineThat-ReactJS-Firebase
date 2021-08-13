import React, { Component } from 'react';

class Cell extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hilighted: false,
      };
  
      this.mouseOver = this.mouseOver.bind(this);
      this.mouseOut = this.mouseOut.bind(this);
    }
    mouseOver(evt) {
      this.setState({
        hilighted: true,
      });
    }
  
    static getDerivedStateFromProps(props, state) {
      if (state.hilighted && !props.hasSelectionStarted()) {
        return {
          hilighted: false,
        };
      }
      return null;
    }
  
    mouseOut(evt) {
      let id = evt.target.id;
      let startBox = this.props.hasSelectionStarted();
      let hilighted = true;
      if (startBox && startBox.id === id) {
        hilighted = true;
      }
      this.setState({
        hilighted: hilighted,
      });
    }
  
    render() {
      let cell = this.props.cell;
      let id = cell.id;
      let currClass =
        "cell" + (cell.used || this.state.hilighted ? " hilighted" : "");
      return (
        <div
          className={currClass}
          id={id}
          onMouseDown={this.props.selectionStart}
          onMouseUp={this.props.selectionEnd}
          onMouseOver={this.mouseOver}
          onMouseOut={this.mouseOut}
        >
          {cell.letter}
        </div>
      );
    }
  }

  export default Cell;