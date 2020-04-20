import { GET_TWEETS, SET_TWEETS, LIKE_TWEET } from '../actions/newsFeedActions'

export const newsFeedReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_TWEETS: {
            return {...state, tweets: action.tweets};
        }
        case SET_TWEETS: {
            return { ...state, tweets: action.tweets };
        }
        case LIKE_TWEET: {
            return { ...state, tweets: action.tweets };
        }
        default:
            return state;
    }
};