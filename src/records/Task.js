import Immutable from 'immutable';

const Task = Immutable.Record({
  id: '',
  title: '',
  isClosed: false,
  isSyncedWithGitLab: false,
  hasGitlabSyncFailure: false,
  gitLabId: ''
});

export default Task;