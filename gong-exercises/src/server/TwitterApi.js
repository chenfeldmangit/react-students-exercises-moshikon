import React, { Component, useState } from 'react';

export function useLocalStorage(key) {

    function handleLocalStorageObject(data) {
        console.log("handleLocalStorageObject");
        localStorage.setItem(key, JSON.stringify(data));
        setLocalStorageObject(data);
    }

    function geJsonFromLocalStorage() {
        console.log("geJsonFromLocalStorage");
        let item = localStorage.getItem(key);
        return item ? JSON.parse(item) : item;
    }

    const [localStorageObject, setLocalStorageObject] = useState(geJsonFromLocalStorage());

    return [localStorageObject, handleLocalStorageObject];
}


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
                , 1000);
        });
    };
}

export default TwitterApi;
