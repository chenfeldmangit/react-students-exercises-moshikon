export const GET_TWEETS = 'GET_TWEETS';
export const SET_TWEETS = 'SET_TWEETS';
export const LIKE_TWEET = 'LIKE_TWEET';

export const getTweets = (tweets) => ({
    type: GET_TWEETS,
    tweets
});

export const setTweets = (tweets) => ({
    type: SET_TWEETS,
    tweets
});

export const likeTweet = (tweets) => ({
    type: LIKE_TWEET,
    tweets
});

