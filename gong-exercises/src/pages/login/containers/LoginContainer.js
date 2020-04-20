import { connect } from "react-redux";
import Login from '../components/login';
import * as loginActions from '../actions/loginActions';

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLogin: (userName) => {
        ownProps.history.push('/home');
        dispatch(loginActions.login(userName));
    },
    onSignUp: (userName) => {
        ownProps.history.push('/home');
        dispatch(loginActions.signUp(userName));
    },
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;