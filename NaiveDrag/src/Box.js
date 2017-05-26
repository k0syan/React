/**
 * Created by Shahen Kosyan on 4/8/17.
 */

import React, {Component, PropTypes} from 'react';
import {DragSource} from 'react-dnd';
import ItemTypes from './ItemTypes';

const style = {
  position: 'absolute',
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  cursor: 'move',
};

const boxSource = {
  beginDrag(props) {
    const {id, left, top} = props;
    return {id, left, top};
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

class Box extends Component {
  render() {
    const {hideSourceOnDrag, left, top, connectDragSource, isDragging, children} = this.props;
    if (isDragging && hideSourceOnDrag) {
      return null;
    }

    return connectDragSource(
      <div style={{...style, left, top}}>
        {children}
      </div>,
    );
  }
}

export default DragSource(ItemTypes.BOX, boxSource, collect)(Box);
