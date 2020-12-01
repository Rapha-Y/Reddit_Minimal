import React from 'react';
import './SearchBar.css';
import { FaSearch } from 'react-icons/fa';

class SearchBar extends React.Component {
    render() {
        return (
            <label for='search-bar' className='search-bar'>
                <FaSearch />
                <input type='text' placeholder='Search' id='search-bar' name='search-bar' />
            </label>
        );
    }
}

export default SearchBar;