import React, { Component } from 'react';

import Grid from "./Grid.js";
import WSGenerator from './WSGenerator.js';
class WordSearch extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.wsGenerator = new WSGenerator();
      this.wsGenerator.setGridSize();
      this.wsGenerator.initGrid();
      this.wsGenerator.populateUnusedBoxes();
    }
  
    render() {
      return (
        <div id="root-container">
          <Grid ws={this.wsGenerator} />
        </div>
      );
    }
  }
  export default WordSearch;