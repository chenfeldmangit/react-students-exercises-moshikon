import React, { Component } from 'react';
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
import { Link } from "react-router-dom";

class LeftSideBar extends Component {
    render() {
        return (<div className="left-side-bar">
            <Link to='/'>
            <ButtonComponent class={'tweeter-default-button'} src={twitter}/>
            </Link>
            <Link to='/home'>
                <ButtonComponent class={'tweeter-default-button'} src={home} title={"Home"}/>
            </Link>
            <ButtonComponent class={'tweeter-default-button'} src={telescope} title={"Explore"}/>
            <Link to='/notifications'>
                <ButtonComponent class={'tweeter-default-button'} src={notification} title={`Notifications (${this.props.notifications})`}/>
            </Link>
            <ButtonComponent class={'tweeter-default-button'} src={envelope} title={"Messages"}/>
            <ButtonComponent class={'tweeter-default-button'} src={bookmark} title={"Bookmarks"}/>
            <ButtonComponent class={'tweeter-default-button'} src={list} title={"Lists"}/>
            <Link to={'/profile'}>
                <ButtonComponent class={'tweeter-default-button'} src={monk} title={"Profile"}/>
            </Link>
            <ButtonComponent class={'tweeter-default-button'} src={ellipsis} title={"More"}/>
            <ButtonComponent class={'tweet-button'} title={"Tweet"}/>
        </div>)
    }
}

LeftSideBar.propTypes = {};

export default LeftSideBar;