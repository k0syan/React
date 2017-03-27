/**
 * Created by Shahen Kosyan on 3/25/17.
 */

import React, {Component, PropTypes} from 'react';
import './Knight.css';
import {ItemTypes} from '../Constants';
import {DragSource} from 'react-dnd';

const knightSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Knight extends Component {
  render() {
    const {connectDragSource, isDragging} = this.props;
    return connectDragSource(
      <div className="knight">
        ♘
      </div>
    );
  }
}

Knight.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);
