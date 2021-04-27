import {put, call} from 'redux-saga/effects';
import {RecordsService} from '../services';
import * as types from '../types';

export function getRecordsRequest(artist) {
  return {
    type: types.recordTypes.RECORDS_REQUEST,
    artist,
  };
}

export function* getRecords({artist}) {
  try {
    const records = yield call(RecordsService.fetchRecords, artist);
    console.log(JSON.stringify(records));
    yield put({
      type: types.recordTypes.RECORDS_SUCCESS,
      records,
    });
  } catch (error) {
    yield put({
      type: types.recordTypes.RECORDS_FAILURE,
      error,
    });
  }
}
