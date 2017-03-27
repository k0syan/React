/**
 * Created by Shahen Kosyan on 3/25/17.
 */

import React, {Component} from 'react';
import Knight from '../Knight/Knight';
import Square from '../Square/Square';
import './Board.css';

class Board extends Component {
  constructor(props) {
    super(props);

    this.renderSquares = this.renderSquares.bind(this);
    this.squares = [];
    console.log(this.props);
  }

  renderSquares() {
    console.log(this.props);
    console.log(this.props.knightPosition);
    for (let i = 0; i < 8; ++i) {
      for (let j = 0; j < 8; ++j) {
        const black = (i + j) % 2 === 1;
        const [knightX, knightY] = this.props.knightPosition;
        const piece = (i === knightX && j === knightY) ?
          <Knight /> :
          null;

        this.squares.push(
          <Square black={black} key={"" + i + ", " + j}>
            {piece}
          </Square>
        );
      }
    }
  }

  render() {
    this.renderSquares();

    return (
      <div className="app">
        <h2>React DnD Tutorial</h2>
        <div className="board">
          {this.squares}
          {/*<Square black>*/}
            {/*<Knight />*/}
          {/*</Square>*/}
        </div>
      </div>
    );
  }
}

export default Board;
