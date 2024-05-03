import React, { useState } from 'react';

function Search(props) {
    

    function handleChange(event) {
        
        props.onSearch(event.target.value);
    }

    return (
        <input
            type="text"
            placeholder="Search"
            value={props.searchTerm}
            onChange={handleChange}
            className="monster-list__search-input"
        />
    );
}

export default Search;