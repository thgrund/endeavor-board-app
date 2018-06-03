import React from 'react';
import { Step } from 'semantic-ui-react';

export default function BoardSteps(props) {
  return (
    <Step.Group ordered className="alpha-board-steps">
      <Step completed={props.currentStep > 1} active={props.currentStep === 1}>
        <Step.Content>
          <Step.Title>Review your Alpha States</Step.Title>
          <Step.Description>Decide if your alpha states are done or not</Step.Description>
        </Step.Content>
      </Step>

      <Step disabled={props.currentStep === 1} active={props.currentStep === 2} completed={props.currentStep === 3}  >
        <Step.Content>
          <Step.Title>Planning your Objectives</Step.Title>
          <Step.Description>Decide which alpha states should be processed in the next iteration</Step.Description>
        </Step.Content>
      </Step>

      <Step disabled={props.currentStep <= 2} active={props.currentStep === 3}>
        <Step.Content>
          <Step.Title>Planning your Tasks</Step.Title>
          <Step.Description>Tasks will be synchronized with GitLab</Step.Description>

        </Step.Content>
      </Step>

    </Step.Group>
  );
}