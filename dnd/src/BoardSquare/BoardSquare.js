/**
 * Created by Shahen Kosyan on 3/27/17.
 */

import React, {Component, PropTypes} from 'react';
import Square from '../Square/Square';
import {moveKnight} from '../Game';
import {ItemTypes} from '../Constants';
import {DropTarget} from 'react-dnd';
import './BoardSquare.css';


const squareTarget = {
  drop(props) {
    moveKnight(props.x, props.y);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class BoardSquare extends Component {
  render() {
    const {x, y, connectDropTarget} = this.props;
    const black = (x + y) % 2 === 1;

    return connectDropTarget(
      <div>
        <Square black={black}>
          {this.props.children}
        </Square>
      </div>
    );
  }
}

BoardSquare.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default DropTarget(ItemTypes.KNIGHT, squareTarget, collect)(BoardSquare);
