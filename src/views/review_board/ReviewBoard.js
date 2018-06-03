import React, {Component} from 'react';
import ReviewBoardRowContainer from '../../containers/review_board/ReviewBoardRowContainer'
import PropTypes from 'prop-types';

export default class ReviewBoard extends Component {

  render() {
    const { areaOfConcerns, alphas } = this.props;
    const rows = [];

    return (
      <div className="review-board-container">
        {[...areaOfConcerns.values()].forEach(areaOfConcern => {
          // eslint-disable-next-line
          {[...alphas.values()].forEach(alpha => {
            areaOfConcern.alphaIds.forEach(alphaId => {
              if (alphaId === alpha.id && alpha.alphaStateIds.length > 0) {
                rows.push(
                  <ReviewBoardRowContainer
                    alphaStateIds={alpha.alphaStateIds}
                    alphaTitle={alpha.title}
                    alphaColor={areaOfConcern.color}/>
                )
              }
            })
          })}
        })}

        {rows}
      </div>
    );
  }
}

ReviewBoard.propTypes = {
  areaOfConcerns: PropTypes.object.isRequired,
  alphas: PropTypes.object.isRequired,
};