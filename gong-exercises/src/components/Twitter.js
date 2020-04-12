import React, { Component } from 'react';
import LeftSideBarComponent from "./LeftSideBarComponent";
import NotificationComponent from "./NotificationComponent";
import RightSideBarComponent from "./RightSideBarComponent";
import TwitterApi from "../server/TwitterApi";
import ProfilePage from "./ProfilePage";

class Twitter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: [],
            filteredTweets: [],
            searchText: ''
        }
    }

    getTweets = async () => {
        console.log("getTweets called");
        const tweets = await TwitterApi.getTweets();
        this.setState({ tweets, filteredTweets: tweets });
    };

    setTweets = async (tweets) => {
        try {
            await TwitterApi.setTweets(tweets);
            this.setState({ tweets });
            this.setFilteredTweets(this.state.searchText);
        } catch (error) {
            throw error;
        }
    };

    setFilteredTweets = async (searchText) => {
        const filteredTweets = this.state.tweets.filter(({ textarea }) => textarea.includes(searchText));
        this.setState({ searchText, filteredTweets });
    };


    componentDidMount() {
        this.getTweets();
        setInterval(() => this.getTweets(), 50000);
    }

    onProfilePageClick = () => {
        this.setState({ navToProfilePage: true })
    };

    onHomeClick = () => {
        this.setState({ navToProfilePage: false })
    };

    render() {
        return (
            <>
                <LeftSideBarComponent onProfilePageClick={this.onProfilePageClick} onHomeClick={this.onHomeClick}/>
                {this.state.navToProfilePage ? <ProfilePage onHomeClick={this.onHomeClick}/> :
                    <NotificationComponent tweets={this.state.tweets} updateTweets={this.setTweets}
                                           filteredTweets={this.state.filteredTweets}/>}
                <RightSideBarComponent tweets={this.state.tweets} updateTweets={this.setFilteredTweets}/>
            </>
        );
    }
}

Twitter.propTypes = {};

export default Twitter;