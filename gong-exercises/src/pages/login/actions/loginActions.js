export const LOGIN = 'LOGIN';
export const SIGN_UP = 'SIGN_UP';

export const login = (user) => ({
    type: LOGIN,
    user
});

export const signUp = (user) => ({
    type: SIGN_UP,
    user
});