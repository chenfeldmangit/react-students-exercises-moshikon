import { LOGIN, SIGN_UP } from '../actions/loginActions'

export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN: {
            return { ...state, userName: action.user };
        }
        case SIGN_UP: {
            return { ...state, userName: action.user };
        }
        default:
            return state;
    }
};