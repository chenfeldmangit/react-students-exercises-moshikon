import React from 'react';
import PropTypes from 'prop-types';
import Notification from "./Notification";
import monk from "../../../assets/monk.svg";

NotificationPage.propTypes = {};

function NotificationPage({ notifications }) {
    const renderNotifications = () => (
        notifications.map((notification) => <Notification notification={notification} key={notification.id}/>)
    );

    return (
        <div className="main-page notification-container">
            {renderNotifications()}
        </div>
    );
}

export default NotificationPage;