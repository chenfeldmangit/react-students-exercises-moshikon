import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonComponent from "./shared/ButtonComponent";

class LeftSideBarComponent extends Component {
    render() {
        return (
            <div className="left-side-bar">
                <ButtonComponent class={'tweeter-default-button'} src={'assets/twitter.svg'}/>
                <ButtonComponent class={'tweeter-default-button'} src={'assets/home.svg'} title={"Home"}
                                 onClick={this.props.onHomeClick}/>
                <ButtonComponent class={'tweeter-default-button'} src={'assets/telescope.svg'} title={"Explore"}/>
                <ButtonComponent class={'tweeter-default-button'} src={'assets/notification.svg'}
                                 title={"Notifications"}/>
                <ButtonComponent class={'tweeter-default-button'} src={'assets/envelope.svg'} title={"Messages"}/>
                <ButtonComponent class={'tweeter-default-button'} src={'assets/bookmark.svg'} title={"Bookmarks"}/>
                <ButtonComponent class={'tweeter-default-button'} src={'assets/list.svg'} title={"Lists"}/>
                <ButtonComponent class={'tweeter-default-button'} src={'assets/monk.svg'} title={"Profile"}
                                 onClick={this.props.onProfilePageClick}/>
                <ButtonComponent class={'tweeter-default-button'} src={'assets/ellipsis.svg'} title={"More"}/>
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