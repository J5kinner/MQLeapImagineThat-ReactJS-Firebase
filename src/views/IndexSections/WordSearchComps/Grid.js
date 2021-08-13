import React from "react";

class Grid extends React.Component {
    constructor(props) {
      super(props);
  
      this.ws = props.ws;
      this.ws.startBox = null;
      this.ws.endBox = null;
  
      this.selectionStart = this.selectionStart.bind(this);
      this.selectionEnd = this.selectionEnd.bind(this);
      this.hasSelectionStarted = this.hasSelectionStarted.bind(this);
      this.state = {
        ws: this.ws,
      };
    }
  
    selectionStart(evt) {
      let id = evt.target.id;
      this.ws.startBox = this.ws.getBoxById(id);
      return false;
    }
  
    selectionEnd(evt) {
      //let dir;
      if (this.ws.startBox != null) {
        let id = evt.target.id;
        this.ws.endBox = this.ws.getBoxById(id);
      }
      if (this.ws.startBox && this.ws.endBox) {
        let strObj = this.ws.getStringBetweenPoints(
          this.ws.startBox,
          this.ws.endBox
        );
        let str = strObj.str;
        let obj = this.ws.TestString(str);
        if (obj.match && !obj.found) {
          this.ws.alreadyFound.push(str);
          this.ws.wordList.forEach((item) => {
            // console.log(
            //   str.split("").reverse().join("").toLowerCase(),
            //   item.text.toLowerCase()
            // );
            if (
              item.text.toLowerCase() === str.toLowerCase() ||
              str.split("").reverse().join("").toLowerCase() ===
                item.text.toLowerCase()
            ) {
              item.found = true;
              console.log(item);
            }
          });
          strObj.ids.forEach((item) => {
            let [i, j] = item;
            this.ws.gridArr[i][j].used = true;
          });
        }
  
        this.ws.startBox = null;
        this.ws.endBox = null;
        this.setState({
          ws: this.ws,
        });
        return false;
      }
    }
  
    hasSelectionStarted() {
      return this.ws.startBox;
    }
  
  
    render() {
      let gridStyle = {
        width: 40 * this.props.ws.gridSize + "px",
        height: 40 * this.props.ws.gridSize + "px",
        borderRadius: "2px",
      };
      let gridArr = this.props.ws.gridArr.slice();
      let wordList = this.props.ws.wordList.slice();
      let toastVisible = this.props.ws.wordList.length === this.props.ws.alreadyFound.length;
      if(this.props.ws.wordList.length === this.props.ws.alreadyFound.length){
        console.log("Hey you finished?");
        this.state = {}

      }
      return (
        <div id="root-wordSearch">
          <div className="grid" style={gridStyle}>
            {gridArr.map((row, i) => {
              return (
                <Row
                  row={row}
                  rowIndex={i}
                  key={i}
                  selectionStart={this.selectionStart}
                  selectionEnd={this.selectionEnd}
                  hasSelectionStarted={this.hasSelectionStarted}
                />
              );
            })}
          </div>
          <div id="word-list">
            <div
              style={{ display: toastVisible ? "block" : "block" }}
              className="ws-my-page-success-toast"
            >
              Wohoooo, You did it
            </div>
            <ul>
              {wordList.map((item, i) => {
                let styleObj = {
                  textDecoration: item.found ? "line-through" : "none",
                };
                return (
                  <li key={i} style={styleObj}>
                    {item.text}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      );
    }
  }


  export default Grid;

