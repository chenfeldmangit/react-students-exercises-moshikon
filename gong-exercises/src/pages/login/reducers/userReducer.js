import { LOGIN, SIGN_UP } from '../actions/loginActions'

export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN: {
            debugger
            return { ...state, userName: action.user };
        }
        case SIGN_UP: {
            debugger
            return { ...state, userName: action.user };
        }
        default:
            return state;
    }
};