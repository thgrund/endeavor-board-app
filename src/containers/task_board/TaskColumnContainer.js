import React from 'react';
import { connect } from 'react-redux'
import TaskBoardColumn from '../../views/task_board/TaskBoardColumn'
import PropTypes from 'prop-types';
import {addTask} from '../../actions/TaskActions';

const TaskColumnContainer = ({
  tasks, alphaState, alphaTitle, alphaColor, columnNumber, addTask}) => (
    <TaskBoardColumn
      tasks={tasks}
      alphaState={alphaState}
      alphaTitle={alphaTitle}
      alphaColor={alphaColor}
      columnNumber={columnNumber}
      onAddTask={addTask}
    />
);

const mapStateToProps = state => {
  return {
    tasks : state.tasks,
  }
};

const mapDispatchToProps = {
  addTask
};

TaskColumnContainer.propTypes = {
  alphaState: PropTypes.object.isRequired,
  alphaTitle: PropTypes.string.isRequired,
  alphaColor: PropTypes.string.isRequired,
  columnNumber: PropTypes.number.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskColumnContainer);
