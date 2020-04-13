import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonComponent from "../../../shared/components/ButtonComponent";
import monk from '../../../assets/monk.svg';
import envelope from '../../../assets/envelope.svg';
import twitter from '../../../assets/twitter.svg';
import home from '../../../assets/home.svg';
import telescope from '../../../assets/telescope.svg';
import notification from '../../../assets/notification.svg';
import bookmark from '../../../assets/bookmark.svg';
import list from '../../../assets/list.svg';
import ellipsis from '../../../assets/ellipsis.svg';

class LeftSideBarComponent extends Component {
    render() {
        return (
            <div className="left-side-bar">
                <ButtonComponent class={'tweeter-default-button'} src={twitter}/>
                <ButtonComponent class={'tweeter-default-button'} src={home} title={"Home"}
                                 onClick={this.props.onHomeClick}/>
                <ButtonComponent class={'tweeter-default-button'} src={telescope} title={"Explore"}/>
                <ButtonComponent class={'tweeter-default-button'} src={notification}
                                 title={"Notifications"}
                                 onClick={this.props.onNotificationClick}/>
                <ButtonComponent class={'tweeter-default-button'} src={envelope} title={"Messages"}/>
                <ButtonComponent class={'tweeter-default-button'} src={bookmark} title={"Bookmarks"}/>
                <ButtonComponent class={'tweeter-default-button'} src={list} title={"Lists"}/>
                <ButtonComponent class={'tweeter-default-button'} src={monk} title={"Profile"}
                                 onClick={this.props.onProfilePageClick}/>
                <ButtonComponent class={'tweeter-default-button'} src={ellipsis} title={"More"}/>
                <ButtonComponent class={'tweet-button'} title={"Tweet"}/>
            </div>
        );
    }
}

LeftSideBarComponent.propTypes = {
    onHomeClick: PropTypes.func.isRequired,
    onProfilePageClick: PropTypes.func.isRequired,
};

export default LeftSideBarComponent;