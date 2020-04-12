import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonComponent from "./shared/ButtonComponent";

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

class NewTweetComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    prepareTweet = () => {
        if (this.state.text.length < 3) {
            return
        }
        this.props.onAddTweet({ ...profileData, textarea: this.state.text });
        this.setState({ text: '' });
    };

    onValueChange = (text) => {
        this.setState({ text });
    };

    render() {
        return (
            <div className="new-tweet-container">
                <div className="tweet-container-header">
                    <div className="tweet-container-header-title">
                        <h2>Home</h2>
                        <button className="tweeter-default-button">
                            <img src="../assets/stars.svg" width="20"/>
                        </button>
                    </div>
                    <div className="tweet-container-header-context">
                        <img className="profile-image" src="../assets/monk.svg" width="40" alt="profile"/>
                        <label>
                            <input className="tweet-container-header-context-textarea"
                                   placeholder="What's happening?" value={this.state.text} onChange={(text) =>
                                this.onValueChange(text.target.value)}/>
                        </label>
                    </div>
                    <div className="tweet-container-header-buttons">
                        <div className="tweet-container-footer">
                            <ButtonComponent class={'tweeter-default-button'} src={'assets/image.svg'}/>
                            <ButtonComponent class={'tweeter-default-button'} src={'assets/gif.svg'}/>
                            <ButtonComponent class={'tweeter-default-button'} src={'assets/list.svg'}/>
                            <ButtonComponent class={'tweeter-default-button'} src={'assets/mask.svg'}/>
                            <ButtonComponent class={'tweet-button'} onClick={this.prepareTweet} title="Tweet"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

NewTweetComponent.propTypes = {
    onAddTweet: PropTypes.func
};

export default NewTweetComponent;