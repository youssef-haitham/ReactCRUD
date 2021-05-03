import React from 'react'
import '../styles/Search.css'
function search() {
    return (
        <div className="searchBar">
        <input
            type="text"
            placeholder="Enter search key"
        />
        <button className="button" type="submit">Search</button>
        </div>
    )
}

export default search
