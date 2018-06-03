import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TaskColumnContainer from '../../containers/task_board/TaskColumnContainer';
import {checkIfAllCriteriaAreDone} from '../../utils/Map';

export default class TaskBoardRow extends Component {

  render() {
    const columns = [];
    const {alphaStateId, alphaStates, alphaTitle, alphaColor} = this.props;
    const alphaState = alphaStates.get(alphaStateId);
    if (alphaState.isObjective && !checkIfAllCriteriaAreDone(alphaState.checklistMap)) {
      for (let i = 1; i <= 2; i++) {
        columns.push(<TaskColumnContainer
            alphaTitle={alphaTitle}
            alphaColor={alphaColor}
            alphaState={alphaState}
            columnNumber={i}
            key={alphaState.title}/>);
      }

      return (
          <div className="alpha-state-board-row">
            {columns}
          </div>
      )

    } else {
      return null;
    }
  }
}

TaskBoardRow.propTypes = {
  alphaStates: PropTypes.object.isRequired,
  alphaTitle: PropTypes.string.isRequired,
  alphaColor: PropTypes.string.isRequired,
  alphaStateId: PropTypes.string.isRequired,
};