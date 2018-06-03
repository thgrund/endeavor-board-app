import React from 'react';
import { connect } from 'react-redux';
import ReviewBoardRow from '../../views/review_board/ReviewBoardRow';
import PropTypes from 'prop-types';
import {checkAllCriteria, uncheckAllCriteria} from '../../actions/AlphaStateActions';

const ReviewBoardRowContainer = ({alphaStates, alphaTitle, alphaColor, alphaStateIds, checkAllCriteria, uncheckAllCriteria}) => (

    <ReviewBoardRow
      alphaColor={alphaColor}
      alphaStateIds={alphaStateIds}
      alphaStates={alphaStates}
      alphaTitle={alphaTitle}
      onCheckAllCriteria={checkAllCriteria}
      onUncheckAllCriteria={uncheckAllCriteria}
    />
);

const mapStateToProps = state => {
  return {
    alphaStates : state.alphaStates
  }
};

const mapDispatchToProps = {
  checkAllCriteria,
  uncheckAllCriteria
};


ReviewBoardRowContainer.propTypes = {
  alphaTitle: PropTypes.string.isRequired,
  alphaColor: PropTypes.string.isRequired,
  alphaStateIds: PropTypes.array.isRequired,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewBoardRowContainer);
