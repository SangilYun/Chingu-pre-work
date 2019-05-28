import React from 'react';

const SearchField =({searchInputHandler, searchResultHandler})=>{
        return (
            <div id="searchField">
                <input onChange={searchInputHandler}></input>
                <button onClick={searchResultHandler}>SEARCH</button>
            </div>
        );    
}

export default SearchField;