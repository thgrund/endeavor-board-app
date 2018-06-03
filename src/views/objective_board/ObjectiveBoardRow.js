import React, {Component} from 'react';
import ObjectiveBoardColumnContainer from '../../containers/objective_board/ObjectiveBoardColumnContainer'
import PropTypes from 'prop-types';

export default class ObjectiveBoardRow extends Component {
  render() {
    const columns = [];
    const {alphaState, alphaTitle, alphaColor} = this.props;

      for (let i = 0; i < 2; i++) {
        columns.push(
            <ObjectiveBoardColumnContainer
                key={alphaTitle}
                columnNumber={i}
                alphaTitle={alphaTitle}
                alphaColor={alphaColor}
                alphaState={alphaState}/>);
      }

    return (
      <div className="alpha-state-board-row">
        {columns}
      </div>
    )
  }
}

ObjectiveBoardRow.propTypes = {
  alphaState: PropTypes.object.isRequired,
  alphaTitle: PropTypes.string.isRequired,
  alphaColor: PropTypes.string.isRequired,
};