import React from 'react';
import './SearchBar.css';
import { FaSearch } from 'react-icons/fa';

class SearchBar extends React.Component {
    handleChange(value) {
        this.props.onSearch(value);
    }

    render() {
        return (
            <label htmlFor='search-bar' className='search-bar'>
                <FaSearch />
                <input 
                    type='text' 
                    placeholder='Search' 
                    id='search-bar' 
                    name='search-bar' 
                    onChange={e => this.handleChange(e.target.value)} 
                />
            </label>
        );
    }
}

export default SearchBar;