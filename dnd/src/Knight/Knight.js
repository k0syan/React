/**
 * Created by Shahen Kosyan on 3/25/17.
 */

import React, {Component, PropTypes} from 'react';
import {ItemTypes} from '../Constants';
import {DragSource} from 'react-dnd';
import './Knight.css';

const knightSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

class Knight extends Component {
  componentDidMount() {
    console.log("yaay");
  }

  render() {
    const {connectDragSource} = this.props;
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
