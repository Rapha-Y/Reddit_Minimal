import React from 'react';
import { FaReddit, FaUserCircle } from 'react-icons/fa';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className='logo'>
                    <FaReddit className='logo-img' />
                    <h1>
                        <span className='highlight'>Reddit</span>Min
                    </h1>
                </div>
            </header>
        );
    }
}

export default Header;