import React, {Component} from 'react';
import AlphaStateCard from '../alpha_state_card/AlphaStateCard'
import TaskColumnEntryContainer from '../../containers/task_board/TaskColumnEntryContainer';

import {Input, Button, Segment, List} from 'semantic-ui-react'
import PropTypes from 'prop-types';

export default class TaskBoardColumn extends Component {

  constructor(props) {
    super(props);

    this.state = {
      taskTitle: '',
      isTaskChecked: false,
    };
  }

  addTaskClick(title) {
    if (title !== "") {
      this.props.onAddTask(title, this.props.alphaState.id, false);
      this.setState({taskTitle: ''});
    }
  }

  checkEnterPress(e) {
    if (e.which === 13) {
      e.preventDefault();
      this.addTaskClick(this.state.taskTitle);
    }
  }

  inputTitleChange(e) {
    this.setState({ taskTitle: e.target.value });
  }

  render() {

    const {
      alphaState,
      alphaColor,
      alphaTitle,
      tasks,
      columnNumber}
    = this.props;

    return (
      <div className="alpha-state-board-cell">
        {columnNumber === 1 ?
          <AlphaStateCard
              alphaColor={alphaColor}
              alphaTitle={alphaTitle}
              alphaState={alphaState}
              isCriteriaCheckable={false}/>
            :
          <Input
              className="task-input"
              onChange={this.inputTitleChange.bind(this) }
              onKeyDown={this.checkEnterPress.bind(this)}
              placeholder={'Add new Task for alpha state "' + alphaState.title + '"...'}
              value={this.state.taskTitle}
              action="true">
            <input />

            <Button onClick={ this.addTaskClick.bind(this, this.state.taskTitle)} >Add</Button>
          </Input>
        }

        { alphaState.taskIds.length > 0 && columnNumber === 2 &&
          <Segment className="task-boxen">

            <List divided="true" relaxed="true">
              {alphaState.taskIds.map((taskId) => {
                return (
                    <TaskColumnEntryContainer
                        task={tasks.get(taskId)}
                        alphaStateId={alphaState.id}
                    />
                );
              })
            }
            </List>
          </Segment>
        }

      </div >
    )
  }
}

TaskBoardColumn.propTypes = {
  onAddTask: PropTypes.func.isRequired,
  alphaTitle: PropTypes.string.isRequired,
  alphaColor: PropTypes.string.isRequired,
  alphaState: PropTypes.object.isRequired,
  columnNumber: PropTypes.number.isRequired,
};
