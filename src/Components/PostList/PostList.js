import React from 'react';
import './PostList.css';

import Post from '../Post/Post';

class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        const fetch = require('node-fetch');
        const url = 'https://www.reddit.com/r/all.json?raw_json=1&limit=30';

        fetch(url)
            .then(res => res.json())
            .then(res => res.data.children)
            .then(res => res.map(post => {
                let title = post.data.title;
                let author = post.data.author;
                let time = post.data.created_utc;
                let img = post.data.preview ? post.data.preview.images[0].source.url : '';
                let upvotes = post.data.ups - post.data.downs;
                let id = post.data.id;

                return { title, author, time, img, upvotes, id };
            }))
            .then(res => {
                this.setState({
                    posts: res
                });
            });
    }

    render() {
        return (
            <div className='postlist-container'>
                {
                    this.state.posts.map((post) => {
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