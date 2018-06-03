import React, {Component} from 'react';
import TaskBoardRowContainer from '../../containers/task_board/TaskBoardRowContainer'
import PropTypes from 'prop-types';

export default class TaskBoard extends Component {

  render() {
    const { areaOfConcerns, alphas } = this.props;
    const rows = [];

    return (
        <div className="board-container">
          <div className="alpha-state-board-row table-row-header">
            <div className="alpha-state-board-cell table-cell-header">
              Next Alpha State
            </div>
            <div className="alpha-state-board-cell table-cell-header">
              Tasks
            </div>
          </div>

          {[...areaOfConcerns.values()].forEach(areaOfConcern => {
            // eslint-disable-next-line
            {[...alphas.values()].forEach(alpha => {
              areaOfConcern.alphaIds.forEach(alphaId => {
                if (alphaId === alpha.id) {
                  alpha.alphaStateIds.forEach(alphaStateId => {
                    rows.push(
                        <TaskBoardRowContainer
                        alphaStateId={alphaStateId}
                        alphaTitle={alpha.title}
                        alphaColor={areaOfConcern.color} />
                    )
                  })
                }
              })
            })}
          })}

          {rows}
        </div>
    );
  }
}

TaskBoard.propTypes = {
  areaOfConcerns: PropTypes.object.isRequired,
  alphas: PropTypes.object.isRequired,
};