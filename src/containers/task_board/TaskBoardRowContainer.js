import React from 'react';
import { connect } from 'react-redux'
import TaskBoardRow from '../../views/task_board/TaskBoardRow'
import PropTypes from 'prop-types';

const TaskColumnContainer = ({alphaStates, alphaTitle, alphaColor, alphaStateId}) => (

    <TaskBoardRow alphaColor={alphaColor}
                  alphaStateId={alphaStateId}
                  alphaStates={alphaStates}
                  alphaTitle={alphaTitle}/>
);

const mapStateToProps = state => {
  return {
    alphaStates : state.alphaStates
  }
};

TaskColumnContainer.propTypes = {
  alphaTitle: PropTypes.string.isRequired,
  alphaColor: PropTypes.string.isRequired,
  alphaStateId: PropTypes.string.isRequired,
};

export default connect(
    mapStateToProps,
    null
)(TaskColumnContainer);
