import React, { Component } from 'react';
import ButtonComponent from "../../../shared/components/ButtonComponent";
import monk from '../../../assets/monk.svg';
import exportSvg from '../../../assets/export.svg';
import heart from '../../../assets/heart.svg';
import switchSvg from '../../../assets/switch.svg';
import envelope from '../../../assets/envelope.svg';

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
                        <img className="profile-image" src={monk} width="40" alt="profile"/>
                        <span className="tweet-header"> Monk</span>
                        <span className="tweet-sub-header"> @monk.gong</span>
                        <span className="tweet-sub-header"> 2h</span>
                    </div>
                    <p className="notification-tweet-context">{tweet.textarea}</p>
                    <div className="notification-tweet-buttons">
                        <ButtonComponent class={'like-button'} src={envelope}/>
                        <ButtonComponent class={'like-button'} src={switchSvg}/>
                        <ButtonComponent class={className} src={heart} onClick={this.tweetUpdate}/>
                        <ButtonComponent class={'like-button'} src={exportSvg}/>
                    </div>
                </div>
            </div>
        );
    }
}

TweetComponent.propTypes = {};

TweetComponent.defaultProps = {};