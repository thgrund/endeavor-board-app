import React, {Component} from 'react';
import AlphaStateCard from '../alpha_state_card/AlphaStateCard'
import AlphaStateDraggableCard from '../alpha_state_card/AlphaStateDraggableCard'

import PropTypes from 'prop-types';

export default class ReviewBoardColumn extends Component {

  render() {
    const { alphaState, alphaColor, alphaTitle, onToggleCriteria, isAlphaStateReadOnly, dragType } = this.props;

    return (
      <div className="review-board-column">
        {dragType === undefined ?
          <AlphaStateCard
              alphaColor={alphaColor}
              alphaTitle={alphaTitle}
              alphaState={alphaState}
              isCriteriaCheckable={!isAlphaStateReadOnly}
              onToggleCriteria={onToggleCriteria}
          /> :
          <AlphaStateDraggableCard
              alphaTitle={alphaTitle}
              alphaColor={alphaColor}
              alphaState={alphaState}
              dragType={dragType}
              onToggleCriteria={onToggleCriteria}
              isCriteriaCheckable={!isAlphaStateReadOnly}/>
        }
      </div >
    )
  }
}

ReviewBoardColumn.propTypes = {
  alphaTitle: PropTypes.string.isRequired,
  alphaColor: PropTypes.string.isRequired,
  alphaState: PropTypes.object.isRequired,
  columnNumber: PropTypes.number.isRequired,
  onToggleCriteria: PropTypes.func.isRequired
};
