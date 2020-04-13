import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonComponent from "./shared/ButtonComponent";
import monk from '../assets/monk.svg';
import stars from '../assets/stars.svg';
import image from '../assets/image.svg';
import gif from '../assets/gif.svg';
import list from '../assets/list.svg';
import mask from '../assets/mask.svg';

const profileData = {
    officialName: 'moshiko.n',
    nickName: '@NMoshiko',
    numOfTweet: 1,
    profileImgUrl: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png',
    coverImgUrl: 'https://pbs.twimg.com/profile_banners/43470348/1580217978/600x200',
    dateOfCreation: 'Joined June 2019',
    numOfFollowing: 11,
    numOfFollowers: 13,
};


export default function NewTweetComponent(props) {
    const initialState = '';
    const [text, setText] = useState(initialState);

    const prepareTweet = () => {
        if (text.length < 3) {
            return
        }
        props.onAddTweet({ ...profileData, textarea: text });
        setText(initialState);
    };

    return (
        <div className="new-tweet-container">
            <div className="tweet-container-header">
                <div className="tweet-container-header-title">
                    <h2>Home</h2>
                    <button className="tweeter-default-button">
                        <img src={stars} width="20"/>
                    </button>
                </div>
                <div className="tweet-container-header-context">
                    <img className="profile-image" src={monk} width="40" alt="profile"/>
                    <label>
                        <input className="tweet-container-header-context-textarea"
                               placeholder="What's happening?" value={text}
                               onChange={(text) => setText(text.target.value)}/>
                    </label>
                </div>
                <div className="tweet-container-header-buttons">
                    <div className="tweet-container-footer">
                        <ButtonComponent class={'tweeter-default-button'} src={image}/>
                        <ButtonComponent class={'tweeter-default-button'} src={gif}/>
                        <ButtonComponent class={'tweeter-default-button'} src={list}/>
                        <ButtonComponent class={'tweeter-default-button'} src={mask}/>
                        <ButtonComponent class={'tweet-button'} onClick={prepareTweet} title="Tweet"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

NewTweetComponent.propTypes = {
    onAddTweet: PropTypes.func
};