import React, { Component } from 'react';
import BoxComponent from "../../../shared/components/BoxComponent";
import SearchBoxComponent from "../../../shared/components/SearchBoxComponent";
import telescope from '../../../assets/telescope.svg';

class RightSideBar extends Component {
    constructor(props) {
        super(props);
        this.state = { searchText: '' }
    }


    onSearch = (searchText) => {
        this.setState({ searchText: searchText });
        this.props.updateTweets(searchText)
    };

    render() {
        return (
            <div className="right-side-bar">
                <SearchBoxComponent img={telescope} text="Search Twitter" onSearch={this.onSearch}
                                    searchText={this.state.searchText}/>
                <BoxComponent title={'Trends for you'}
                              items={[{ title: 'Trending', hashtag: '#gong', numOfTweets: '10000k Tweets' }]}/>
                <BoxComponent title={'Who to follow'}
                              items={[{
                                  title: 'Monk',
                                  hashtag: '@monk.gong',
                                  numOfTweets: '2h',
                                  btn: 'Follow'
                              }]}/>
            </div>
        );
    }
}

RightSideBar.propTypes = {};

export default RightSideBar;