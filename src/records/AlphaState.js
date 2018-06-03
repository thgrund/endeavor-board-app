import Immutable from 'immutable';

const AlphaState = Immutable.Record({
  id: '',
  title: '',
  order: '',
  checklistMap: {},
  isObjective: false,
  taskIds: [],
});

export default AlphaState;