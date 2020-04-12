import React, { Component } from 'react';
import NewTweetComponent from "./NewTweetComponent";
import TweetComponent from "./TweetComponent";

class NotificationComponent extends Component {
    constructor(props) {
        super(props);
    }


    onLikeTweet = (tweetId) => {
        const { tweets } = this.props;
        let tweetToUpdateIndex = tweets.findIndex((tweet) => tweet.tweetId === Number(tweetId));
        tweets[tweetToUpdateIndex].like = !tweets[tweetToUpdateIndex].like;
        this.props.updateTweets(tweets);
    };

    addTweet = (tweet) => {
        const { textarea } = tweet;
        let tweetsUpdated = [];
        let tweetId = 0;
        const { tweets } = this.props;
        if (!!tweets) {
            tweetsUpdated = tweets;
            tweetId = tweetsUpdated.length;
            tweetId = tweetId++;
        }

        tweetsUpdated.push({ tweetId, textarea, like: false });
        this.props.updateTweets(tweetsUpdated);
    };

    render() {
        const { filteredTweets } = this.props;

        return (
            <div className="notification-container">
                <NewTweetComponent onAddTweet={this.addTweet}/>
                {/*{noTweets ? <div id='loading'>TWEET!</div> : null}*/}
                {filteredTweets?.reverse().map((tweet) => <TweetComponent tweet={tweet} onLikeTweet={this.onLikeTweet} key={tweet.tweetId}/>)}
            </div>
        );
    }
}

NotificationComponent.propTypes = {};

export default NotificationComponent;