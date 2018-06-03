import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import AlphaStateCard from './AlphaStateCard';

const alphaStateCardSource = {

  beginDrag(props) {
    // Return the data describing the dragged item
    return { alphaState: props.alphaState };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class AlphaStateDraggableCard extends Component {

  render() {
    const {
        alphaColor,
        alphaTitle,
        alphaState,
        onToggleCriteria,
        isCriteriaCheckable,
        connectDragSource,
        isDragging } = this.props;

  return connectDragSource (
      <div className="asc-card-wrapper asc-card-draggable-container" style={{
        opacity: isDragging ? 0.5 : 1}}>
        <AlphaStateCard
            alphaColor={alphaColor}
            alphaTitle={alphaTitle}
            alphaState={alphaState}
            isCriteriaCheckable={isCriteriaCheckable}
            onToggleCriteria={onToggleCriteria}/>
      </div>
    );
  }
}

AlphaStateDraggableCard.propTypes = {
  alphaTitle: PropTypes.string.isRequired,
  alphaColor: PropTypes.string.isRequired,
  alphaState: PropTypes.object.isRequired,
  dragType: PropTypes.string.isRequired,
  isCriteriaCheckable: PropTypes.bool.isRequired,
};

export default DragSource((props) => {return props.dragType;}, alphaStateCardSource, collect)(AlphaStateDraggableCard);
