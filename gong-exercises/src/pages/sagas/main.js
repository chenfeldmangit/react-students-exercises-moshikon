import { all, fork } from 'redux-saga/effects';
import newsFeedSaga from '../home/sagas/newsFeedSaga';

export default function* rootSaga() {
    yield all([fork(newsFeedSaga)]);
}
