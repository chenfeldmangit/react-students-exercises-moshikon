import React from 'react';
import ButtonComponent from "./ButtonComponent";

BoxComponent.propTypes = {};

function BoxComponent({ title, items }) {
    return (
        <div className="right-side-bar-container">
            <h2 className="right-side-bar-container-header">
                {title}
            </h2>
            <hr/>
            {items[0].img && <img className="profile-image" src={items[0].img} width="40" alt="profile"/>}
            <div className="right-side-bar-container-trends">
                <span> {items[0].title}</span>
                <strong> {items[0].hashtag}</strong>
                <span>  {items[0].numOfTweets}</span>
            </div>
            {items[0].btn && <ButtonComponent class={'follow-button'} title={items[0].btn}/>}
        </div>
    );
}

export default BoxComponent;