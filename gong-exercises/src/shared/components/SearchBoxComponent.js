import React from 'react';

function SearchBoxComponent({img, text, onSearch, searchText}) {
    return (
        <div className="tweeter-search-container">
            <img src={img}
                 width="20" alt="love"/>
            <input className="tweeter-search-container-input" type="search" placeholder={text}
                   value={searchText} onChange={(text) => onSearch(text.target.value)}/>
        </div>
    );
}

export default SearchBoxComponent;