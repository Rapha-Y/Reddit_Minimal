import React from 'react';
import Modal from 'react-modal';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import './Post.css';
import { shortenNumber, getTimeDiff } from '../../Functions/functions';

Modal.setAppElement(document.getElementsByClassName('App'));

class Post extends React.Component {
    render() {
        return (
            <div className='post-container'>
                <a target='_blank' rel="noreferrer" href={this.props.link}>
                    <div className='upvote-container'>
                        <FaChevronUp className='disabled-button' />
                        <span className='upvote-info'>{shortenNumber(this.props.upvotes)}</span>
                        <FaChevronDown className='disabled-button' />
                    </div>
                    <div className='post-content'>
                        <div className='post-text'> 
                            <div className='post-info'>
                                Posted by u/{this.props.author} {getTimeDiff(new Date(), new Date(this.props.time * 1000))}
                            </div>
                            <h2>{this.props.title}</h2>
                        </div>
                        {
                            this.props.img ? 
                            <img 
                                src={this.props.img} 
                                alt={`post sent by ${this.props.author}`}
                                onClick={this.openModal}
                            /> :
                            ''
                        }
                    </div>
                </a>
            </div>
        );
    }
}

export default Post;