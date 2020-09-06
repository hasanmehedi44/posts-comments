import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';

const Home = () => {

    const [posts, setPosts] = useState([]);

    const postServerData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }
    useEffect(postServerData, [])

    return (
        <div>
            <h1>Posts</h1>
            {
                posts.map(post => <Post post ={post} key = {post.id} ></Post>)
            }
        </div>
    );
};

export default Home;