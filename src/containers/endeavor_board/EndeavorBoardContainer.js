import React from 'react';
import { connect } from 'react-redux'
import EndeavorBoard from '../../views/endeavor_board/EndeavorBoard'

const EndeavorBoardContainer = ({areaOfConcerns, alphas}) => (
    <EndeavorBoard
        areaOfConcerns={areaOfConcerns}
        alphas={alphas}
    />
);

const mapStateToProps = state => ({
  areaOfConcerns: state.areaOfConcerns,
  alphas: state.alphas,
});

export default connect(
    mapStateToProps,
    {}
)(EndeavorBoardContainer)
