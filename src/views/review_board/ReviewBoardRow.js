import React, {Component} from 'react';
import ReviewBoardColumnContainer from '../../containers/review_board/ReviewBoardColumnContainer'
import PropTypes from 'prop-types';
import ReviewBoardDroppableColumn from './ReviewBoardDroppableColumn';

import {checkIfAllCriteriaAreDone} from '../../utils/Map';

export default class ReviewBoardRow extends Component {

  render() {
    const columns = [];
    const {alphaStates,
        alphaStateIds,
        alphaTitle,
        alphaColor,
        onCheckAllCriteria,
        onUncheckAllCriteria} = this.props;

    let isAlphaStateReadOnly = false;

    for (let i = 0; i < alphaStateIds.length; i++) {
      const alphaState = alphaStates.get(alphaStateIds[i]);
      if (alphaState !== undefined) {
        let areAllCriteriaDone = checkIfAllCriteriaAreDone(alphaState.checklistMap);

        if (!areAllCriteriaDone && !isAlphaStateReadOnly) {

          columns.push (
              <ReviewBoardDroppableColumn alphaTitle={alphaTitle}
                onCheckAllCriteria={onCheckAllCriteria}
                onUncheckAllCriteria={onUncheckAllCriteria}
                checkIfAllCriteriaAreDone={checkIfAllCriteriaAreDone}/>
          );
        }

        columns.push(
          <ReviewBoardColumnContainer
              columnNumber={i}
              alphaTitle={alphaTitle}
              alphaColor={alphaColor}
              alphaState={alphaState}
              dragType={isAlphaStateReadOnly ? undefined : alphaTitle}
              isAlphaStateReadOnly={isAlphaStateReadOnly}
          />);

        if (!areAllCriteriaDone && !isAlphaStateReadOnly) isAlphaStateReadOnly = true;

      } else {
        columns.push (
          <div className="review-board-column">
            <div className="asc-card-wrapper">
            </div>
          </div>
        );
      }

    }

    return (
        <div className="review-board-row">
          {columns}
        </div>
    )
  }
}

ReviewBoardRow.propTypes = {
  onCheckAllCriteria: PropTypes.func.isRequired,
  onUncheckAllCriteria: PropTypes.func.isRequired,
  alphaStates: PropTypes.object.isRequired,
  alphaStateIds: PropTypes.array.isRequired,
  alphaTitle: PropTypes.string.isRequired,
  alphaColor: PropTypes.string.isRequired,
};