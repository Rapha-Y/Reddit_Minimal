import React from 'react';
import { FaReddit } from 'react-icons/fa';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar';
import TagButtons from '../TagButtons/TagButtons';

class Header extends React.Component {
    render() {
        return (
            <header>
                {/* Logo can become a component */}
                <div className='logo'>
                    <FaReddit className='logo-img' />
                    <h1>
                        <span className='highlight'>Reddit</span>Min
                    </h1>
                </div>
                <SearchBar onSearch={this.props.onSearch} />
                <TagButtons onToggle={this.props.onToggle} />
            </header>
        );
    }
}

export default Header;