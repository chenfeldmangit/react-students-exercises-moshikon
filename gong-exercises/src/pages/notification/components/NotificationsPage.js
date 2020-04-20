import React from 'react';
import Notification from "./Notification";

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