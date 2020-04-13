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

    const [state, setState] = useState({
        tweets: [],
        filteredTweets: [],
        searchText: '',
        showPage: PAGES.HOME
    });

    const doOnMount = () => {
        getTweets();
        setInterval(() => getTweets(), 50000);
    };

    const getTweets = async () => {
        console.log("getTweets called");
        const tweets = await TwitterApi.getTweets();
        setState({ ...state, tweets, filteredTweets: tweets });
    };

    const setTweets = async (tweets) => {
        try {
            await TwitterApi.setTweets(tweets);
            setState({ ...state, tweets });
            setFilteredTweets(state.searchText);
        } catch (error) {
            throw error;
        }
    };

    const setFilteredTweets = (searchText) => {
        const filteredTweets = state.tweets.filter(({ textarea }) => textarea.includes(searchText));
        setState({ ...state, searchText, filteredTweets });
    };

    const onProfilePageClick = () => {
        setState({ ...state, showPage: PAGES.PROFILE })
    };

    const onHomeClick = () => {
        setState({ ...state, showPage: PAGES.HOME })
    };

    const renderMainPage = () => {
        switch (state.showPage) {
            case PAGES.HOME:
                return <NotificationComponent tweets={state.tweets} updateTweets={setTweets}
                                              filteredTweets={state.filteredTweets}/>
            case PAGES.PROFILE:
                return <ProfilePage onHomeClick={onHomeClick}/>
            default:
                return null

        }
    };

    useEffect(doOnMount, []);

    return (
        <>
            <LeftSideBarComponent onProfilePageClick={onProfilePageClick} onHomeClick={onHomeClick}/>
            {renderMainPage()}
            <RightSideBarComponent tweets={state.tweets} updateTweets={setFilteredTweets}/>
        </>
    );
}