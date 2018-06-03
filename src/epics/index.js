import { combineEpics } from 'redux-observable';
import * as taskEpic from './tasks';
import { ajax } from 'rxjs/observable/dom/ajax';

export default (...args) => combineEpics(
    taskEpic.addGitLabIssue,
    taskEpic.deleteGitLabIssue,
    taskEpic.renameGitLabIssue,
    taskEpic.toggleGitLabIssue
)(...args, {ajax});