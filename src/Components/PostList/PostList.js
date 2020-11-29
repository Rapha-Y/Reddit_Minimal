import React from 'react';
import './PostList.css';

import Post from '../Post/Post';

// Hardcoded data
const posts = [
    {
      title: 'Cat pic, upvotes to the left',
      author: 'AmeliaWatson',
      time: Date.parse('2020-11-28T15:00-03:00'),
      img: 'https://a.wattpad.com/useravatar/SelinaAl7.256.653083.jpg',
      upvotes: 102568,
      id: 1
    },
    {
      title: 'I SIMP FOR THE GODDESS',
      author: 'KiaraHololive',
      time: Date.parse('2020-11-28T21:00-03:00'),
      img: 'https://static.zerochan.net/Mori.Calliope.full.3106276.png',
      upvotes: 240194,
      id: 2
    },
    {
      title: 'long boi',
      author: 'GawrGura',
      time: Date.now(),
      img: 'https://i.pinimg.com/originals/4c/19/5a/4c195a2b21aa113a91c9ffa14378df81.png',
      upvotes: 666,
      id: 3
    }
];

class PostList extends React.Component {
    render() {
        return (
            <div className='postlist-container'>
                {
                    posts.map((post) => {
                        return <Post
                            title={post.title}
                            author={post.author}
                            time={post.time}
                            img={post.img}
                            upvotes={post.upvotes}
                            key={post.id}
                        />;
                    })
                }
            </div>
        );
    }
}

export default PostList;