import { connect } from "react-redux";
import * as twitterActions from '../actions/newsFeedActions';
import NewsFeed from "../components/NewsFeed";

const mapStateToProps = (state, ownProps) => ({
    newsFeed: state.newsFeed,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    likeTweet: (tweets) => {
        localStorage.setItem('twitter', JSON.stringify(tweets));
        dispatch(twitterActions.likeTweet(tweets));
    },
    setTweet: (tweets) => {
        localStorage.setItem('twitter', JSON.stringify(tweets));
        dispatch(twitterActions.setTweets(tweets));
    },
    getTweets: () => {
        let item = localStorage.getItem('twitter');
        const tweets = item ? JSON.parse(item) : item;
        dispatch(twitterActions.getTweets(tweets));
    },
});

const NewsFeedContainer = connect(mapStateToProps, mapDispatchToProps)(NewsFeed);

export default NewsFeedContainer;