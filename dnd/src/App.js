/**
 * Created by Shahen Kosyan on 3/25/17.
 */

import React, {Component} from 'react';
import Board from 'Board/Board';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.setState({
      knightPosition: [0, 0]
    })
  }

  render() {
    return (
      <Board knightPosition={this.state.knightPosition} />
    );
  }
}

export default App;

