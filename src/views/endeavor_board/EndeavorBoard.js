import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';
import BoardSteps from './BoardSteps';
import ObjectiveBoardContainer from '../../containers/objective_board/ObjectiveBoardContainer';
import ReviewBoard from '../review_board/ReviewBoard';
import TaskBoard from '../task_board/TaskBoard';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import PropTypes from 'prop-types';

const MAX_STEP = 3;

class EndeavorBoard extends Component {

  constructor() {
    super();
    this.state = {
      currentStep: 1,
    };
  }

  increseCurrentStep() {
    this.setState((prevState) => {
      let step = 1;
      if (prevState.currentStep === MAX_STEP) {
        step = 1;
      } else {
        step = prevState.currentStep + 1;
      }

      return {currentStep: step}
    });
  }

  decreaseCurrentStep() {
    this.setState((prevState) => {
      let step = 1;
      if (prevState.currentStep > 1 ) {
        step = prevState.currentStep - 1;
      }

      return {currentStep: step}
    });
  }

  changeStatus(e) {
    if (e.keyCode === 37 && (e.shiftKey || e.ctrlKey))
        this.decreaseCurrentStep();
    if (e.keyCode === 39 && (e.shiftKey || e.ctrlKey))
      this.increseCurrentStep();
  }

  render() {
    const {areaOfConcerns, alphas} = this.props;

    return (
      <div>
        <div className="page-header">
        </div>
        <BoardSteps currentStep={this.state.currentStep} />

        <div className="button-container">
          <Button onClick={() => this.increseCurrentStep()}
                className="button-step"
                content={this.state.currentStep === MAX_STEP ? 'Finish' : 'Next'}
                icon='right arrow'
                labelPosition='right' />
          {this.state.currentStep > 1 &&
          <Button onClick={() => this.decreaseCurrentStep()}
                  className="button-step" content='Back' icon='left arrow'
                  labelPosition='left'/>
          }
        </div>
        <div className="board-wrapper" tabIndex="1" onKeyDown={this.changeStatus.bind(this)}>
          {this.state.currentStep === 1 &&
            <ReviewBoard areaOfConcerns={areaOfConcerns} alphas={alphas}/>
          }
          {this.state.currentStep === 2 &&
            <ObjectiveBoardContainer areaOfConcerns={areaOfConcerns} alphas={alphas}/>
          }
          {this.state.currentStep === 3 &&
            <TaskBoard areaOfConcerns={areaOfConcerns} alphas={alphas}/>
          }
        </div>
      </div>
    )
  }
}

EndeavorBoard.propTypes = {
  areaOfConcerns: PropTypes.object.isRequired,
  alphas: PropTypes.object.isRequired,
};

export default DragDropContext(HTML5Backend)(EndeavorBoard);
