import React, { Component } from 'react';
import ButtonComponent from "./shared/ButtonComponent";

export default class TweetComponent extends Component {

    tweetUpdate = () => {
        this.props.onLikeTweet(this.props.tweet?.tweetId)
    };

    render() {
        const { tweet } = this.props;
        let className = 'like-button';
        if (tweet.like) {
            className = 'like-button-active'
        }
        return (
            <div>
                <div className="tweet-container">
                    <div className="tweet-container-header">
                        <img className="profile-image" src="assets/monk.svg" width="40" alt="profile"/>
                        <span className="tweet-header"> Monk</span>
                        <span className="tweet-sub-header"> @monk.gong</span>
                        <span className="tweet-sub-header"> 2h</span>
                    </div>
                    <p className="notification-tweet-context">{tweet.textarea}</p>
                    <div className="notification-tweet-buttons">
                        <ButtonComponent class={'like-button'} src={'assets/envelope.svg'}/>
                        <ButtonComponent class={'like-button'} src={'assets/switch.svg'}/>
                        <ButtonComponent class={className} src={'assets/heart.svg'} onClick={this.tweetUpdate}/>
                        <ButtonComponent class={'like-button'} src={'assets/export.svg'}/>
                    </div>
                </div>
            </div>
        );
    }
}

TweetComponent.propTypes = {};

TweetComponent.defaultProps = {};