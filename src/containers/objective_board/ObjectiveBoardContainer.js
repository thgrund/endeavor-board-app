import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ObjectiveBoard from '../../views/objective_board/ObjectiveBoard'

const ObjectiveBoardContainer = ({areaOfConcerns, alphas, alphaStates}) => (
    <ObjectiveBoard
        areaOfConcerns={areaOfConcerns}
        alphas={alphas}
        alphaStates={alphaStates}
    />
);

ObjectiveBoardContainer.propTypes = {
  areaOfConcerns: PropTypes.object.isRequired,
  alphas: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  alphaStates: state.alphaStates
});

export default connect(
    mapStateToProps,
    {}
)(ObjectiveBoardContainer)
