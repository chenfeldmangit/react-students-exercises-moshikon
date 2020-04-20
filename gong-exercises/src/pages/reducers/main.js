import { combineReducers } from 'redux';
import { userReducer } from '../login/reducers/userReducer';
import { newsFeedReducer } from '../home/reducers/newsFeedReducer';

console.log('mainReducer.js start');

const mainReducer = combineReducers({
    user: userReducer,
    newsFeed: newsFeedReducer
});

export default mainReducer;

console.log('mainReducer.js end');
