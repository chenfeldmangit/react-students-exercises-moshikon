import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonComponent from "./button";

class LeftSideBarComponent extends Component {
    render() {
        return (
            <div>
                <ButtonComponent src={'assets/twitter.svg'}/>
                <ButtonComponent src={'assets/ellipsis.svg'} title={"Home"}/>
                <ButtonComponent src={'assets/monk.svg'} title={"Explore"}/>
                <ButtonComponent src={'assets/list.svg'} title={"More"}/>
                <ButtonComponent src={'assets/bookmark.svg'} title={"Profile"}/>
                <ButtonComponent src={'assets/envelope.svg'} title={"Lists"}/>
                <ButtonComponent src={'assets/home.svg'} title={"Bookmarks"}/>
                <ButtonComponent src={'assets/telescope.svg'} title={"Messages"}/>
                <ButtonComponent src={'assets/notification.svg'} title={"Notifications"}/>
            </div>
        );
    }
}

LeftSideBarComponent.propTypes = {};

export default LeftSideBarComponent;