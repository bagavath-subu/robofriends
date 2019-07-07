import React, { Component } from 'react'
import './Search.css'

class Search extends Component {
    render() {
        return (
            <div className="SearchArea bb b--black">
            <input className="br3" placeholder="Search here" type="text"/>    
            </div>
        )
    }
}

export default Search;