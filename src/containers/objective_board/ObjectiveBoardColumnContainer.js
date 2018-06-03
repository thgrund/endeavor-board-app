import React from 'react';
import { connect } from 'react-redux'
import {toggleObjective} from '../../actions/AlphaStateActions';
import ObjectiveBoardColumn from '../../views/objective_board/ObjectiveBoardColumn'
import PropTypes from 'prop-types';

const ObjectiveBoardColumnContainer = ({ toggleObjective, alphaTitle, alphaColor, alphaState, columnNumber }) => (
  <ObjectiveBoardColumn
    onCardDropped={() => toggleObjective(alphaState.id)}
    alphaTitle={alphaTitle}
    alphaColor={alphaColor}
    alphaState={alphaState}
    columnNumber={columnNumber} />
);

ObjectiveBoardColumnContainer.propTypes = {
  alphaTitle: PropTypes.string.isRequired,
  alphaColor: PropTypes.string.isRequired,
  alphaState: PropTypes.object.isRequired,
  columnNumber: PropTypes.number.isRequired
};

const mapDispatchToProps = {
  toggleObjective,
};

export default connect(
    null,
    mapDispatchToProps
)(ObjectiveBoardColumnContainer);
