import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';

const columnTarget = {
  drop(props, monitor) {
    const item = monitor.getItem();

    if (props.checkIfAllCriteriaAreDone(item.alphaState.checklistMap))
      props.onUncheckAllCriteria(item.alphaState.id);
    else
      props.onCheckAllCriteria(item.alphaState.id);
  },
};


function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType()
  };
}

class ReviewBoardDroppableColumn extends Component {

  render() {
    const {connectDropTarget } = this.props;

    return connectDropTarget(
      <div className="review-board-column">
        <div className="asc-card-wrapper">
        </div>
      </div>
    );
  }
}

ReviewBoardDroppableColumn.propTypes = {
  alphaTitle: PropTypes.string.isRequired,
  onCheckAllCriteria: PropTypes.func,
  onUncheckAllCriteria: PropTypes.func,
  checkIfAllCriteriaAreDone: PropTypes.func
};

export default
DropTarget((props) => {return props.alphaTitle;}, columnTarget, collect)(ReviewBoardDroppableColumn);
