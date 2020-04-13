import React, { Component } from 'react';
import ButtonComponent from "../../../shared/components/ButtonComponent";
import monk from '../../../assets/monk.svg';
import back from '../../../assets/back.svg';
import GongModal from "../../../shared/components/GongModal";

const PROFILE_DATA = {
    officialName: 'moshiko.n',
    nickName: '@NMoshiko',
    numOfTweet: 1,
    profileImgUrl: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png',
    coverImgUrl: 'https://pbs.twimg.com/profile_banners/43470348/1580217978/600x200',
    dateOfCreation: 'Joined June 2019',
    numOfFollowing: 11,
    numOfFollowers: 13,
};

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileData: PROFILE_DATA,
            openEditModal: false,
            form: { ...PROFILE_DATA }
        }
    }

    toggleModal = () => {
        this.setState((state) => ({ openEditModal: !state.openEditModal }));
    };

    onValueChange = (value) => {
        this.setState((state) => {
            return { form: { ...state.form, officialName: value } }
        });

    };

    updateProfile = () => {
        this.setState((state) => {
            return { profileData: state.form, openEditModal: false }
        });
    };
    renderUserData = (profileData) => (
        <div className='profile-context-container'>
            <span className='official-name'>{profileData.officialName}</span>
            <span className='nick-name'>{profileData.nickName}</span>
            <span className='date'>{profileData.dateOfCreation}</span>
            <span className='following'>{profileData.numOfFollowing} Following</span>
            <span className='followers'>{profileData.numOfFollowers} Followers</span>
        </div>
    );

    render() {
        const { profileData } = this.state;

        return (
            <>
                <div className="profile-page">
                    <div>
                        <img alt="Back" width="20" src={back} onClick={this.props.history.goBack}/>
                        <div className='name-n-tweet'>
                            <span className='name'>{profileData.officialName}</span>
                            <span className='tweets'>{profileData.numOfTweet} Tweets</span>
                        </div>
                    </div>
                    <img src="https://pbs.twimg.com/profile_banners/2587834920/1584763990/600x200" className='cover'
                         alt=''/>
                    <div className='profile-page-mid'>
                        <img height='100' width='100' src={monk} className='profile profile-page-image'
                             alt=''/>
                        <ButtonComponent class="follow-button" onClick={this.toggleModal} title="Edit"/>
                    </div>
                    { this.renderUserData(profileData) }
                </div>
                {this.state.openEditModal &&
                (<GongModal value={this.state.form.officialName} title="Official Name:" onSubmit={this.updateProfile}
                           onCancel={this.toggleModal} onValueChange={this.onValueChange}/>)
                }
            </>
        );
    }
}

ProfilePage.propTypes = {};

export default ProfilePage;