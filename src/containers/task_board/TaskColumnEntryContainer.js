import React from 'react';
import { connect } from 'react-redux'
import TaskBoardColumnEntry from '../../views/task_board/TaskBoardColumnEntry'
import PropTypes from 'prop-types';
import {deleteTask, toggleTaskState, renameTask} from '../../actions/TaskActions';

const TaskColumnEntryContainer = ({
    task, deleteTask, toggleTaskState, renameTask, alphaStateId}) => (

    <TaskBoardColumnEntry
        task={task}
        onDeleteTask={deleteTask}
        onToggleTaskState={toggleTaskState}
        onRenameTask={renameTask}
        alphaStateId={alphaStateId}
    />
);

const mapDispatchToProps = {
  deleteTask,
  toggleTaskState,
  renameTask
};

TaskColumnEntryContainer.propTypes = {
  alphaStateId: PropTypes.string.isRequired,
  task: PropTypes.object.isRequired
};

export default connect(
    null,
    mapDispatchToProps
)(TaskColumnEntryContainer);
