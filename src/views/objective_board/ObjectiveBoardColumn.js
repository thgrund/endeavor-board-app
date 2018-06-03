import React, {Component} from 'react';
import AlphaStateDraggableCard from '../alpha_state_card/AlphaStateDraggableCard'
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';

const columnTarget = {
  canDrop(props) {
    return (
      (props.columnNumber === 0 && props.alphaState.isObjective) ||
      (props.columnNumber === 1 && !props.alphaState.isObjective)
    );
  },
  drop(props) {
    props.onCardDropped();
  }
};


function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

class ObjectiveBoardColumn extends Component {
  renderColumn() {
    const {columnNumber, alphaTitle, alphaColor, alphaState, connectDropTarget } = this.props;
    let card;

    if (alphaState === undefined) return <div></div>;

    if ((columnNumber === 0 && !alphaState.isObjective) ||
        (columnNumber === 1 && alphaState.isObjective)) {
      card = <AlphaStateDraggableCard
          alphaTitle={alphaTitle}
          alphaColor={alphaColor}
          alphaState={alphaState}
          dragType={alphaState.id}
          isCriteriaCheckable={false}/>;
    }

    return connectDropTarget (
      <div className="alpha-state-board-cell">
        {card}
      </div>
    );
  }

  render() {
    const {connectDropTarget } = this.props;

    return connectDropTarget(
      this.renderColumn()
    );
  }
}

ObjectiveBoardColumn.propTypes = {
  columnNumber: PropTypes.number.isRequired,
  alphaTitle: PropTypes.string.isRequired,
  alphaColor: PropTypes.string.isRequired,
  alphaState: PropTypes.object.isRequired,
  onCardDropped: PropTypes.func
};

export default
DropTarget((props) => {return props.alphaState.id;}, columnTarget, collect)(ObjectiveBoardColumn);
