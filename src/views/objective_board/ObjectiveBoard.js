import React from 'react';
import ObjectiveBoardRow from './ObjectiveBoardRow'
import PropTypes from 'prop-types';
import {checkIfAllCriteriaAreDone} from '../../utils/Map';

const ObjectiveBoard = ({areaOfConcerns, alphas, alphaStates, rows = []}) => (

  <div className="board-container">

    <div className="alpha-state-board-row table-row-header">
      <div className="alpha-state-board-cell table-cell-header">
        Potencial Alpha State
      </div>
      <div className="alpha-state-board-cell table-cell-header">
        Next Alpha State
      </div>
    </div>

    {[...areaOfConcerns.values()].forEach(areaOfConcern => {
      // eslint-disable-next-line
      {[...alphas.values()].forEach(alpha => {
          areaOfConcern.alphaIds.forEach(alphaId => {
            if (alphaId === alpha.id)
              // eslint-disable-next-line
              alpha.alphaStateIds.some(alphaStateId => {
                if (!checkIfAllCriteriaAreDone(alphaStates.get(alphaStateId).checklistMap)) {
                  return rows.push(<ObjectiveBoardRow
                    alphaState={alphaStates.get(alphaStateId)}
                    alphaTitle={alpha.title}
                    alphaColor={areaOfConcern.color} />
                  )
                }
              })
          })
        })}
      })}

    {rows}
  </div>
);

ObjectiveBoard.propTypes = {
  areaOfConcerns: PropTypes.object.isRequired,
  alphas: PropTypes.object.isRequired,
  alphaStates: PropTypes.object.isRequired
};

export default ObjectiveBoard;