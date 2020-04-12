import React, { Component } from 'react';

const twitter = 'twitter';

class TwitterApi extends Component {
    static getTweets = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() =>
                    resolve(JSON.parse(localStorage.getItem(twitter)))
                , 500);
        });
    };

    static setTweets = (tweets) => {
        return new Promise((resolve, reject) => {
            setTimeout(() =>
                    resolve(localStorage.setItem(twitter, JSON.stringify(tweets)))
                , 0);
        });
    };
}

export default TwitterApi;