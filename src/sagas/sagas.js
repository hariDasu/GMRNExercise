import {all, takeLatest} from 'redux-saga/effects';
import * as types from '../types';
import * as actions from '../actions/';

export function* getRecordsWatcher() {
  yield takeLatest(types.recordTypes.RECORDS_REQUEST, actions.getRecords);
}

export default function* root() {
  yield all([getRecordsWatcher()]);
}
