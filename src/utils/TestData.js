import React from 'react';
import Alpha from '../records/Alpha';
import AlphaState from '../records/AlphaState';
import AreaOfConcern from '../records/AreaOfConcern';
import Task from '../records/Task';
import { DragDropContext } from 'react-dnd';
import TestBackend from 'react-dnd-test-backend';

export function wrapInTestContext(DecoratedComponent) {
  @DragDropContext(TestBackend)
  class TestContextContainer extends React.Component {
    render() {
      return <DecoratedComponent {...this.props} />;
    }
  }

  return TestContextContainer;
}

export const areaOfConcern = AreaOfConcern({
  id: "1",
  title: 'Area of Concern Titel',
  color: '#324FFF',
  alphaIds: [],
});

export const alpha = Alpha({
  id: "1",
  title: 'Alpha Title',
  alphaStateIds: []
});

export const alphaState = AlphaState({
  id: "1",
  title: "Alpha State Title",
  order: "1",
  checklistMap: { "Key 1" : true, "Key 2": false},
  isObjective: true,
  taskIds: []
});

export const task = Task({
  id: "1",
  title: 'Task Title',
  isClosed: false,
  isSyncedWithGitLab: false,
  gitLabId: 1
});