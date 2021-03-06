import React, { useEffect } from 'react';
import NewTweet from "./NewTweet";
import Tweet from "./Tweet";

export default function NewsFeed(props) {
    console.log('NewsFeed load');
    const { newsFeed, getTweets } = props;
    const { tweets } = newsFeed;

    useEffect(() => {
        console.log('Twitter useEffect');
        getTweets();
    }, [getTweets]);

    const onLikeTweet = (tweetId) => {
        let tweetToUpdateIndex = tweets.findIndex((tweet) => tweet.tweetId === Number(tweetId));
        // deep copy
        const newTweets = JSON.parse(JSON.stringify(tweets));
        newTweets[tweetToUpdateIndex].like = !newTweets[tweetToUpdateIndex].like;
        const numOfNotifications = props.newsFeed.notifications + 1;
        props.likeTweet(newTweets, numOfNotifications);
    };

    const addTweet = (tweet) => {
        const { textarea } = tweet;
        let tweetsUpdated = [];
        let tweetId = 0;

        if (!!tweets) {
            // deep copy
            tweetsUpdated = JSON.parse(JSON.stringify(tweets));
            tweetId = tweetsUpdated.length;
            tweetId = tweetId++;
        }

        tweetsUpdated.unshift({ tweetId, textarea, like: false });
        props.setTweet(tweetsUpdated);
    };

    return (
        <div className="notification-container">
            <NewTweet onAddTweet={addTweet}/>
            {(!tweets || props.newsFeed.loading) ? <div id='loading'>LOADING....</div> : tweets.filter(({ textarea }) => {
                return textarea.includes(props.searchText)
            }).map((tweet) => <Tweet tweet={tweet} onLikeTweet={onLikeTweet}
                                     key={tweet.tweetId}/>)}
        </div>);
}

