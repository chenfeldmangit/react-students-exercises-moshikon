import { connect } from "react-redux";
import * as twitterActions from '../actions/newsFeedActions';
import NewsFeed from "../components/NewsFeed";
import TwitterApi from '../../../server/TwitterApi';

const mapStateToProps = (state, ownProps) => ({
    newsFeed: state.newsFeed,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    likeTweet: (tweets, notifications) => {
        dispatch(twitterActions.likeTweet(tweets, notifications));
    },
    setTweet: (tweets) => {
        localStorage.setItem('twitter', JSON.stringify(tweets));
        dispatch(twitterActions.setTweets(tweets));
    },
    getTweets: async () => {
        const tweets = await TwitterApi.getTweets();
        let notificationsFrom = localStorage.getItem('notifications');
        const notifications = notificationsFrom ? JSON.parse(notificationsFrom) : 0;
        dispatch(twitterActions.getTweets(tweets, notifications));
    },
});

const NewsFeedContainer = connect(mapStateToProps, mapDispatchToProps)(NewsFeed);

export default NewsFeedContainer;