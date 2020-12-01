import React from 'react';
import './TagButtons.css';

class TagButtons extends React.Component {
    render() {
        return (
            <div className='tags-container'>
                <button className='btn-active'>all</button>
                <button className='btn-inactive'>popular</button>
            </div>
        );
    }
}

export default TagButtons;