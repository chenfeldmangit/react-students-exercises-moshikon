import { LOGIN, SIGN_UP } from '../actions/loginActions'

export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN: {
            return { ...state, user: action.user };
        }
        case SIGN_UP: {
            return { ...state, user: action.user };
        }
        default:
            return state;
    }
};