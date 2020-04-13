import React, { useEffect, useState, Component } from 'react';
import LeftSideBarComponent from "./LeftSideBarComponent";
import TweetsCenter from "../../home/components/TweetsCenter";
import RightSideBarComponent from "./RightSideBarComponent";
import TwitterApi from "../../../server/TwitterApi";
import ProfilePage from "../../profile/components/ProfilePage";
import { PAGES } from "../../../shared/strings/TwitterStrings";
import NotificationPage from "../../notification/components/NotificationsPage";
import monk from '../../../assets/monk.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default function Twitter(props) {
    const [twitterData, setTwitterData] = useState({
        tweets: [],
        searchText: '',
    });

    const [currentPage, setCurrentPage] = useState(PAGES.HOME);

    const doOnMount = () => {
        getTweets();
        setInterval(() => getTweets(), 50000);
    };

    const getTweets = async () => {
        console.log("getTweets called");
        const tweets = await TwitterApi.getTweets();
        setTwitterData({ ...twitterData, tweets });
    };

    const setTweets = async (tweets) => {
        try {
            await TwitterApi.setTweets(tweets);
            setTwitterData({ ...twitterData, tweets });
        } catch (error) {
            throw error;
        }
    };

    const setSearchText = (searchText) => {
        setTwitterData({ ...twitterData, searchText });
    };

    const onProfilePageClick = () => {
        setCurrentPage(PAGES.PROFILE);
    };

    const onHomeClick = () => {
        setCurrentPage(PAGES.HOME);
    };

    const onNotificationClick = () => {
        setCurrentPage(PAGES.NOTIFICATION);
    };

    const renderMainPage = () => {
        switch (currentPage) {
            case PAGES.HOME:
                return <TweetsCenter tweets={twitterData.tweets} updateTweets={setTweets}
                                     searchText={twitterData.searchText}/>;
            case PAGES.PROFILE:
                return <ProfilePage onHomeClick={onHomeClick}/>;
            case PAGES.NOTIFICATION:
                return <NotificationPage
                    notifications={[
                        { id: 0, type: 'follow', user: { name: 'monk', img: monk }},
                        { id: 1, type: 'like', user: { name: 'monk', img: monk }, text: 'bla bla bla' }
                        ]}/>;
            default:
                return null

        }
    };

    useEffect(doOnMount, []);

    return (
        <>
            <LeftSideBarComponent onProfilePageClick={onProfilePageClick} onHomeClick={onHomeClick}
                                  onNotificationClick={onNotificationClick}/>
            {renderMainPage()}
            <RightSideBarComponent tweets={twitterData.tweets} updateTweets={setSearchText}/>
        </>
    );
}