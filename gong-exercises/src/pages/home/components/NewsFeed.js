import React from 'react';
import NewTweetComponent from "./NewTweetComponent";
import TweetComponent from "./TweetComponent";
import { useLocalStorage } from "../../../server/TwitterApi";

export default function NewsFeed(props) {
    const tweets = useLocalStorage('twitter')[0];

    const onLikeTweet = (tweetId) => {
        let tweetToUpdateIndex = tweets.findIndex((tweet) => tweet.tweetId === Number(tweetId));
        tweets[tweetToUpdateIndex].like = !tweets[tweetToUpdateIndex].like;
        props.updateTweets(tweets);
    };

    const addTweet = (tweet) => {
        const { textarea } = tweet;
        let tweetsUpdated = [];
        let tweetId = 0;

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
            {tweets?.filter(({ textarea }) => {
                return textarea.includes(props.searchText)
            }).map((tweet) => <TweetComponent tweet={tweet} onLikeTweet={onLikeTweet}
                                                                      key={tweet.tweetId}/>)}
        </div>);
}

