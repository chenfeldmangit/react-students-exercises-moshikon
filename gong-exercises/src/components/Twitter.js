import React, { useEffect, useState } from 'react';
import LeftSideBarComponent from "./LeftSideBarComponent";
import NotificationComponent from "./NotificationComponent";
import RightSideBarComponent from "./RightSideBarComponent";
import TwitterApi from "../server/TwitterApi";
import ProfilePage from "./ProfilePage";

export default function Twitter(props) {
    const PAGES = {
        HOME: 'home',
        PROFILE: 'profile',
    };

    const [twitterData, setTwitterData] = useState({
        tweets: [],
        filteredTweets: [],
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
        setTwitterData({ ...twitterData, tweets, filteredTweets: tweets });
    };

    const setTweets = async (tweets) => {
        try {
            await TwitterApi.setTweets(tweets);
            setTwitterData({ ...twitterData, tweets });
            setFilteredTweets(twitterData.searchText);
        } catch (error) {
            throw error;
        }
    };

    const setFilteredTweets = (searchText) => {
        const filteredTweets = twitterData.tweets.filter(({ textarea }) => textarea.includes(searchText));
        setTwitterData({ ...twitterData, searchText, filteredTweets });
    };

    const onProfilePageClick = () => {
        setCurrentPage(PAGES.PROFILE);
    };

    const onHomeClick = () => {
        setCurrentPage(PAGES.HOME);
    };

    const renderMainPage = () => {
        switch (currentPage) {
            case PAGES.HOME:
                return <NotificationComponent tweets={twitterData.tweets} updateTweets={setTweets}
                                              filteredTweets={twitterData.filteredTweets}/>;
            case PAGES.PROFILE:
                return <ProfilePage onHomeClick={onHomeClick}/>;
            default:
                return null

        }
    };

    useEffect(doOnMount, []);

    return (
        <>
            <LeftSideBarComponent onProfilePageClick={onProfilePageClick} onHomeClick={onHomeClick}/>
            {renderMainPage()}
            <RightSideBarComponent tweets={twitterData.tweets} updateTweets={setFilteredTweets}/>
        </>
    );
}