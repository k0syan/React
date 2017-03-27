/**
 * Created by Shahen Kosyan on 3/25/17.
 */

import React, {Component} from 'react';
import Knight from '../Knight/Knight';
import Square from '../Square/Square';
import {moveKnight} from '../Game';
import './Board.css';

class Board extends Component {
  constructor(props) {
    super(props);

    this.renderSquare = this.renderSquare.bind(this);
  }

  handleSquareClick(toX, toY) {
    moveKnight(toX, toY);
  }


  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const black = (x + y) % 2 === 1;

    const [knightX, knightY] = this.props.knightPosition;
    const piece = (x === knightX && y === knightY) ?
      <Knight /> :
      null;

    return (
      <div key={i}
           onClick={() => this.handleSquareClick(x, y)}>
        <Square black={black}>
          {piece}
        </Square>
      </div>
    );
  }

  render() {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }

    return (
      <div className="app">
        <div className="board">
          {squares}
        </div>
      </div>
    );
  }
}

export default Board;
