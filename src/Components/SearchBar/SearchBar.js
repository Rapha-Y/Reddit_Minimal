import React from 'react';
import './SearchBar.css';
import { FaSearch } from 'react-icons/fa';

class SearchBar extends React.Component {
    render() {
        return (
            <div className='search-bar'>
                <FaSearch />
                <input type='text' value='Search' />
            </div>
        );
    }
}

export default SearchBar;