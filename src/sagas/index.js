import { fork } from 'redux-saga/effects';
import user from './user';
import widgets from './widgets';
import report from './report';


export default function* root() {
  yield fork(user);
  yield fork(widgets);
  yield fork(report);
}
