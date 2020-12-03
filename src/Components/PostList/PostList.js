import React from 'react';
import './PostList.css';

import Post from '../Post/Post';

class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            sub: '',
            searchTerm: ''
        };
    }

    loadList() {
        const fetch = require('node-fetch');
        const url = 'https://www.reddit.com/r/' + this.props.sub + '.json?raw_json=1&limit=10';

        fetch(url)
            .then(res => res.json())
            .then(res => res.data.children)
            .then(res => res.map(post => {
                let searchTerm = this.props.searchTerm;
                let title = post.data.title;
                let author = post.data.author;
                if (title.includes(searchTerm) || author.includes(searchTerm)) {
                    let time = post.data.created_utc;
                    let img = post.data.preview ? post.data.preview.images[0].source.url : '';
                    let upvotes = post.data.ups - post.data.downs;
                    let id = post.data.id;
                    let link = 'https://www.reddit.com' + post.data.permalink;

                    return { title, author, time, img, upvotes, id, link };
                } else {
                    return null;
                }
            }))
            .then(res => {
                if (this.state.sub !== this.props.sub || this.state.searchTerm !== this.props.searchTerm) {
                    this.setState({
                        posts: res,
                        sub: this.props.sub,
                        searchTerm: this.props.searchTerm
                    });
                }
            });
    }

    componentDidMount() {
        this.loadList();
    }

    componentDidUpdate() {
        this.loadList();
    }

    render() {
        return (
            <div className='postlist-container'>
                {
                    this.state.posts.map((post) => {
                        if (post) {
                            return <Post
                                title={post.title}
                                author={post.author}
                                time={post.time}
                                img={post.img}
                                upvotes={post.upvotes}
                                key={post.id}
                                link={post.link}
                            />;
                        } else {
                            return '';
                        }
                    })
                }
            </div>
        );
    }
}

export default PostList;