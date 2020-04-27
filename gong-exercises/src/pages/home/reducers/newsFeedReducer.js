import { GET_TWEETS, SET_TWEETS, LIKE_TWEET, LIKE_TWEET_SUCCESS } from '../actions/newsFeedActions'

export const newsFeedReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_TWEETS: {
            return {...state, tweets: action.tweets, notifications: action.notifications, loading: false};
        }
        case SET_TWEETS: {
            return { ...state, tweets: action.tweets, loading: false };
        }
        case LIKE_TWEET: {
            return { ...state, tweets: action.tweets, notifications: action.notifications, loading:true };
        }
        case LIKE_TWEET_SUCCESS: {
            return { ...state, loading:false };
        }
        default:
            return state;
    }
};