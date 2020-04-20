import React from 'react';
import PropTypes from 'prop-types';

Notification.propTypes = {
    type: PropTypes.string,
    user: PropTypes.shape({
        name: PropTypes.string,
        img: PropTypes.string,
    }),
    text: PropTypes.string,
};

function Notification({ notification }) {
    return (
        <div className='tweet-container'>
            {notification.type === 'follow' ? (<>
                <img src={notification.user.img} className="profile-image" alt=""/>
                <span>{notification.user.name} followed you</span></>) : ''}
            {notification.type === 'like' ?
                <>
                    <img src={notification.user.img} className="profile-image" alt=""/>
                    <span>{notification.user.name} liked your Tweet <p>{notification.text}</p></span></> : ''}
            {/*<hr/>*/}
        </div>
    );
}

export default Notification;