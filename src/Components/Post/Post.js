import React from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import './Post.css';

class Post extends React.Component {
    render() {
        return (
            <div className='post-container'>
                <div className='upvote-container'>
                    <FaChevronUp />
                    102.5k
                    <FaChevronDown />
                </div>
                <div className='post-content'>
                    <div className='post-text'>
                        <div className='post-info'>Posted by u/AmeliaWatson 11 hours ago</div>
                        <h2>Cat pic, upvotes to the left</h2>
                    </div>
                    <img src="https://a.wattpad.com/useravatar/SelinaAl7.256.653083.jpg" alt="cat" />
                </div>
            </div>
        );
    }
}

export default Post;