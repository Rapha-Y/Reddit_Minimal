import React from 'react';
import './TagButtons.css';

class TagButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstBtnState: 'btn-inactive',
            secondBtnState: 'btn-active'
        };
        this.handleToggle = this.handleToggle.bind(this);
    }
    
    handleToggle() {
        this.props.onToggle();
        if (this.state.firstBtnState === 'btn-active'){
            this.setState({
                firstBtnState: 'btn-inactive',
                secondBtnState: 'btn-active'
            });
        } else {
            this.setState({
                firstBtnState: 'btn-active',
                secondBtnState: 'btn-inactive'
            });
        }
    }

    render() {
        return (
            <div className='tags-container' onClick={this.handleToggle}>
                <button 
                    className={this.state.firstBtnState}
                >
                    all
                </button>
                <button 
                    className={this.state.secondBtnState}
                >
                    popular
                </button>
            </div>
        );
    }
}

export default TagButtons;