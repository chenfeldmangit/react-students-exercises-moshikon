import React, { useState } from 'react';
import LeftSideBarComponent from "./LeftSideBarComponent";
import NewsFeed from "../../home/components/NewsFeed";
import RightSideBarComponent from "./RightSideBarComponent";
import { useLocalStorage } from "../../../server/TwitterApi";
import ProfilePage from "../../profile/components/ProfilePage";
import NotificationPage from "../../notification/components/NotificationsPage";
import monk from '../../../assets/monk.svg';
import { Route, Switch } from 'react-router-dom';

export default function Twitter(props) {
    // const tweets = useGetLocalStorage('twitter');
    const setTweetsHook = useLocalStorage('twitter')[1];

    const [twitterData, setTwitterData] = useState({
        searchText: '',
    });

    const setTweets = async (tweets) => {
        try {
            setTweetsHook(tweets);
        } catch (error) {
            throw error;
        }
    };

    const setSearchText = (searchText) => {
        setTwitterData({ ...twitterData, searchText });
    };

    const renderMainPage = () => (
        <Switch>
            <Route path='/' component={() => <NewsFeed updateTweets={setTweets}
                                                       searchText={twitterData.searchText}/>} exact/>
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
            <LeftSideBarComponent/>
            {renderMainPage()}
            <RightSideBarComponent updateTweets={setSearchText}/>
        </>
    );
}