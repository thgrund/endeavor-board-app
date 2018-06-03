import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Input, Button, List, Checkbox, Icon} from 'semantic-ui-react'


export default class TaskBoardColumnEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskTitle: '',
      isTaskBeingProcessed: false,
    };
  }

  renameTaskClick() {
    if (this.state.taskTitle !== "") {
      this.props.onRenameTask(this.props.task.id, this.state.taskTitle);
    }
    this.setState({isTaskBeingProcessed : false})
  }

  checkEnterPress(taskTitle, e) {
    if (e.which === 13) {
      e.preventDefault();
      this.renameTaskClick();
    } else if (e.which === 27) {
      e.preventDefault();
      this.disableInput(taskTitle);
    }
  }

  inputTitleChange(e) {
    this.setState({ taskTitle: e.target.value });
  }

  enableInput() {
    this.setState({isTaskBeingProcessed : true});
  }

  disableInput(taskTitle) {
    this.setState({taskTitle: taskTitle});
    this.setState({isTaskBeingProcessed : false})
  }

  render() {
    const {
        alphaStateId,
        task,
        onDeleteTask,
        onToggleTaskState}
        = this.props;

    if (!this.state.isTaskBeingProcessed) {

      return (
          <List.Item>
            <List.Content floated='right'>
              {task.hasGitlabSyncFailure ?
                  <Icon className="inverted sync-failure red" name="gitlab"/>
                  :
                  (
                    task.isSyncedWithGitLab ?
                      <Icon className="sync-done-icon" name="gitlab"/> :
                      <Icon className="sync-icon" loading name="refresh"/>
                  )
              }
              {<Icon link={!task.isClosed}
                     onClick={!task.isClosed ?
                         this.enableInput.bind(this) : null}
                     disabled={task.isClosed}
                     circular={true} name='pencil'/>}

              {<Icon link={!task.isClosed}
                     onClick={ () => !task.isClosed ?
                         onDeleteTask(alphaStateId, task.id) : null}
                     disabled={task.isClosed}
                     circular={true} name='trash'/>}

            </List.Content>
            <List.Content className = 'task-item-issue' >
                <Checkbox
                  onChange={() => onToggleTaskState(task.id)}
                  label={<label>{task.title}</label>}
                  checked={task.isClosed}/>
              </List.Content>
          </List.Item>
      )
    } else {

      return (
        <List.Item>
          <Input
              autoFocus={true}
              className="task-change-input"
              onChange={this.inputTitleChange.bind(this) }
              onKeyDown={this.checkEnterPress.bind(this, task.title)}

              defaultValue={task.title}>
            <input />
            <Button className="task-entry-button" onClick={ this.renameTaskClick.bind(this)} >Update</Button>
            <Button className="task-entry-button" onClick={ this.disableInput.bind(this, task.title)} >Cancel</Button>
          </Input>
        </List.Item>
      )
    }
  }
}

TaskBoardColumnEntry.propTypes = {
  alphaStateId: PropTypes.string.isRequired,
  task: PropTypes.object.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onToggleTaskState: PropTypes.func.isRequired,
  onRenameTask: PropTypes.func.isRequired,

};