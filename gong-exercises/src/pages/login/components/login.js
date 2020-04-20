import React, { useState } from 'react';
import ButtonComponent from "../../../shared/components/ButtonComponent";
import GongModal from "../../../shared/components/GongModal";
import PropTypes from 'prop-types';
import { useLocalStorage } from "../../../server/TwitterApi";

Login.defaultProps = {};

Login.propTypes = {
    onLogin: PropTypes.func.isRequired,
};

const MODAL = {
    LOGIN: 'login',
    SIGN_UP: 'signUp',
};

export default function Login(props) {
    const [users, setUsers] = useLocalStorage('twitterUsers');

    const [userDetails, setUserDetails] = useState('');
    const [toggleLoginModal, setToggleLoginModal] = useState('');

    const login = () => {
        if (users?.includes(userDetails)) {
            props.onLogin(userDetails);
        } else {
            alert("no user - sign up");
        }
    };

    const signUp = () => {
        if (users) {
            setUsers([...users, userDetails]);
        } else {
            setUsers([userDetails]);
        }
        props.onSignUp(userDetails);
    };

    return (
        <div className="main-page">
            <ButtonComponent class={'follow-button'} title="log in"
                             onClick={() => setToggleLoginModal(MODAL.LOGIN)}/>
            <ButtonComponent class={'tweet-button'} title="Sign up"
                             onClick={() => setToggleLoginModal(MODAL.SIGN_UP)}/>
            {toggleLoginModal === MODAL.LOGIN ? (<GongModal value={userDetails} title="User Name:" onSubmit={login}
                                                            onCancel={() => setToggleLoginModal('')}
                                                            onValueChange={setUserDetails}/>) : toggleLoginModal === MODAL.SIGN_UP ?
                (<GongModal value={userDetails} title="User Name:" onSubmit={signUp}
                            onCancel={() => setToggleLoginModal('')}
                            onValueChange={setUserDetails}/>) : null
            }
        </div>
    );
}
