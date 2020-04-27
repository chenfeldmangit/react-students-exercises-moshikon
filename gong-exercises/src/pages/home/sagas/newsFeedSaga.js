import { all, takeEvery, fork, put } from 'redux-saga/effects';
import {
    LIKE_TWEET,
    LIKE_TWEET_FAIL,
    LIKE_TWEET_SUCCESS,
    likeTweetFail,
    likeTweetSuccess
} from '../actions/newsFeedActions'
import TwitterApi from "../../../server/TwitterApi";

function* likeTweet(action) {
    try {
        yield TwitterApi.setTweets(action.tweets);
        yield put(likeTweetSuccess())
    } catch (error) {
        yield put(likeTweetFail())
    }
}

function* addNotification(action) {
    yield localStorage.setItem('notifications', JSON.stringify(action.notifications));
}

function* onLikeTweetFail() {
    yield alert("fail");
}

function* waitForLikeTweet() {
    yield takeEvery([LIKE_TWEET], likeTweet);
    yield takeEvery([LIKE_TWEET], addNotification);
}

function* waitForLikeTweetFail() {
    yield takeEvery([LIKE_TWEET_FAIL], onLikeTweetFail);
}

// function* waitForLikeTweetSuccesss() {
//     yield takeEvery([LIKE_TWEET_SUCCESS], onLikeTweetFail);
// }

export default function* root() {
    console.log("saga news feed");
    yield all([
        waitForLikeTweet(),
        waitForLikeTweetFail()
    ]);
}