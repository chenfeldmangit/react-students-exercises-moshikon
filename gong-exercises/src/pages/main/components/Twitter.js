import React, { useEffect, useState } from 'react';
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import ProfilePage from "../../profile/components/ProfilePage";
import NotificationPage from "../../notification/components/NotificationsPage";
import loginContainer from "../../login/containers/LoginContainer";
import monk from '../../../assets/monk.svg';
import { Route, Switch } from 'react-router-dom';
import NewsFeedContainer from "../../home/containers/NewsFeedContainer";
import LeftSideBarContainer from "../containers/LeftSideBarContainer";

export default function Twitter(props) {
    console.log('Twitter load');

    if (props.user.userName != null){
        console.log(`hello ${props.user.userName}`);
    }

    const [twitterData, setTwitterData] = useState({
        searchText: '',
    });

    const setSearchText = (searchText) => {
        setTwitterData({ ...twitterData, searchText });
    };

    const renderMainPage = () => (
        <Switch>
            <Route path='/' component={loginContainer} exact/>
            <Route path='/home' component={() => <NewsFeedContainer searchText={twitterData.searchText}/>}/>
            <Route path='/profile' component={ProfilePage}/>
            <Route path='/notifications' component={() => <NotificationPage
                notifications={[{ id: 0, type: 'follow', user: { name: 'monk', img: monk } }, {
                    id: 1,
                    type: 'like',
                    user: { name: 'monk', img: monk },
                    text: 'bla bla bla'
                }]}/>}/>
            <Route component={Error}/>
        </Switch>
    );
    return (
        <>
            <LeftSideBarContainer/>
            {renderMainPage()}
            <RightSideBar updateTweets={setSearchText}/>
        </>
    );
}