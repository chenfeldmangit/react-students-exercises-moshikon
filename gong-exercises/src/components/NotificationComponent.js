import React from 'react';
import NewTweetComponent from "./NewTweetComponent";
import TweetComponent from "./TweetComponent";

export default function NotificationComponent(props) {
    const onLikeTweet = (tweetId) => {
        const { tweets } = props;
        let tweetToUpdateIndex = tweets.findIndex((tweet) => tweet.tweetId === Number(tweetId));
        tweets[tweetToUpdateIndex].like = !tweets[tweetToUpdateIndex].like;
        props.updateTweets(tweets);
    };

    const addTweet = (tweet) => {
        const { textarea } = tweet;
        let tweetsUpdated = [];
        let tweetId = 0;
        const { tweets } = props;
        if (!!tweets) {
            tweetsUpdated = tweets;
            tweetId = tweetsUpdated.length;
            tweetId = tweetId++;
        }

        tweetsUpdated.unshift({ tweetId, textarea, like: false });
        props.updateTweets(tweetsUpdated);
    };


    return (
        <div className="notification-container">
            <NewTweetComponent onAddTweet={addTweet}/>
            {/*{noTweets ? <div id='loading'>TWEET!</div> : null}*/}
            {props.filteredTweets?.map((tweet) => <TweetComponent tweet={tweet} onLikeTweet={onLikeTweet}
                                                                      key={tweet.tweetId}/>)}
        </div>);
}

