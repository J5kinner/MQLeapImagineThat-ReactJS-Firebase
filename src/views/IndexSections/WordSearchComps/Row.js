import React from 'react';
import Cell from './Cell.js';
class Row extends React.Component {
    render() {
      let row = this.props.row;
      return (
        <div className="row">
          {row.map((item, i) => {
            return (
              <Cell
                cell={item}
                key={i}
                selectionStart={this.props.selectionStart}
                selectionEnd={this.props.selectionEnd}
                mouseOver={this.props.mouseOver}
                hasSelectionStarted={this.props.hasSelectionStarted}
              />
            );
          })}
        </div>
      );
    }
  }
export default Row;