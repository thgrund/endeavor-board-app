import React from 'react';
import { connect } from 'react-redux'
import ReviewBoardColumn from '../../views/review_board/ReviewBoardColumn';
import PropTypes from 'prop-types';
import {toggleCriteria} from '../../actions/AlphaStateActions';

const ReviewBoardColumnContainer = ({
    alphaState, alphaTitle, alphaColor, columnNumber, toggleCriteria, isAlphaStateReadOnly, dragType}) => (

    <ReviewBoardColumn
        alphaState={alphaState}
        alphaTitle={alphaTitle}
        alphaColor={alphaColor}
        columnNumber={columnNumber}
        onToggleCriteria={toggleCriteria}
        isAlphaStateReadOnly={isAlphaStateReadOnly}
        dragType={dragType}
    />
);

const mapDispatchToProps = {
  toggleCriteria
};

ReviewBoardColumnContainer.propTypes = {
  alphaState: PropTypes.object.isRequired,
  alphaTitle: PropTypes.string.isRequired,
  alphaColor: PropTypes.string.isRequired,
  columnNumber: PropTypes.number.isRequired,
  isAlphaStateReadOnly: PropTypes.bool.isRequired
};

export default connect(
    null,
    mapDispatchToProps
)(ReviewBoardColumnContainer);
