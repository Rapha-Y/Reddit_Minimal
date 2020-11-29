import React from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import './Post.css';

class Post extends React.Component {
    shortenNumber() {
        const number = this.props.upvotes;
        if (number < 1000) {
            return number;
        } else if (number < 1000000) {
            return Math.floor(number / 1000) + 'k';
        } else if (number < 1000000000) {
            return Math.floor(number / 1000000) + 'm';
        } else if (number < 1000000000000) {
            return Math.floor(number / 1000000) + 'b';
        } else {
            return '???';
        }
    }

    getTimeDiff() {
        const currentTime = new Date();
        const postTime = new Date(this.props.time);
        
        const yearDiff = currentTime.getFullYear() - postTime.getFullYear();
        const monthDiff = currentTime.getMonth() - postTime.getMonth();
        const dayDiff = currentTime.getDate() - postTime.getDate();
        const hourDiff = currentTime.getHours() - postTime.getHours();
        const minDiff = currentTime.getMinutes() - postTime.getMinutes();

        if (yearDiff > 0) {
            if (yearDiff > 1) {
                return yearDiff + ' years ago';
            } else {
                return yearDiff + ' year ago';
            }
        } else if (monthDiff > 0) {
            if (monthDiff > 1) {
                return monthDiff + ' months ago';
            } else {
                return monthDiff + ' month ago';
            }
        } else if (dayDiff > 0) {
            if (dayDiff > 1) {
                return dayDiff + ' days ago';
            } else {
                return dayDiff + ' day ago';
            }
        } else if (hourDiff > 0) {
            if (hourDiff > 1) {
                return hourDiff + ' hours ago';
            } else {
                return hourDiff + ' hour ago';
            }
        } else if (minDiff > 0) {
            if (minDiff > 1) {
                return minDiff + ' minutes ago';
            } else {
                return minDiff + ' minute ago';
            }
        } else {
            return ' just now';
        }
    }

    render() {
        console.log(this.props);
        return (
            <div className='post-container'>
                <div className='upvote-container'>
                    <FaChevronUp />
                    <span className='upvote-info'>{this.shortenNumber()}</span>
                    <FaChevronDown />
                </div>
                <div className='post-content'>
                    <div className='post-text'> 
                        <div className='post-info'>Posted by u/{this.props.author} {this.getTimeDiff()}</div>
                        <h2>{this.props.title}</h2>
                    </div>
                    <img src={this.props.img} alt="cat" />
                </div>
            </div>
        );
    }
}

export default Post;