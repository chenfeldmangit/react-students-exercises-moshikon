export const GET_TWEETS = 'GET_TWEETS';
export const SET_TWEETS = 'SET_TWEETS';
export const LIKE_TWEET = 'LIKE_TWEET';
export const LIKE_TWEET_FAIL = 'LIKE_TWEET_FAIL';
export const LIKE_TWEET_SUCCESS = 'LIKE_TWEET_SUCCESS';

export const getTweets = (tweets, notifications) => ({
    type: GET_TWEETS,
    tweets,
    notifications
});

export const setTweets = (tweets) => ({
    type: SET_TWEETS,
    tweets
});

export const likeTweet = (tweets, notifications) => ({
    type: LIKE_TWEET,
    tweets,
    notifications
});

export const likeTweetFail = () => ({
    type: LIKE_TWEET_FAIL,
});

export const likeTweetSuccess = () => ({
    type: LIKE_TWEET_SUCCESS,
});