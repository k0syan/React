/**
 * Created by Shahen Kosyan on 3/25/17.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Board from './Board/Board';
import './App.css';

class App extends Component {
  render() {
    return (
      <Board knightPosition={[0, 0]} />
    );
  }
}

export default App;
