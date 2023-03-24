import React from 'react';
import './Blog.css'

const Blog = (props) => {
    return (
        <div className='author-blog'>
            <h1>{props.heading}</h1>
            <p>{props.author}</p>
        </div>
    );
};

export default Blog;