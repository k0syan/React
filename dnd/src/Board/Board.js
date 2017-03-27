/**
 * Created by Shahen Kosyan on 3/25/17.
 */

import React, {Component} from 'react';
import Knight from '../Knight/Knight';
import BoardSquare from '../BoardSquare/BoardSquare';
import {moveKnight} from '../Game';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
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
    return (
      <div key={i}>
        <BoardSquare x={x}
                     y={y}>
          {this.renderPiece(x, y)}
        </BoardSquare>
      </div>
    );
  }

  renderPiece(x, y) {
    const [knightX, knightY] = this.props.knightPosition;
    if (x === knightX && y === knightY) {
      return <Knight />;
    }
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

export default DragDropContext(HTML5Backend)(Board);
