import React from 'react';

const SearchField =({searchInputHandler, searchResultHandler, enterListener})=>{
        return (
            <div id="searchField">
                <input onChange={searchInputHandler} onKeyPress={enterListener}></input>
                <button onClick={searchResultHandler}>SEARCH</button>
            </div>
        );    
}

export default SearchField;