import React from 'react';
import { Link } from 'react-router-dom';

const PostsList = ({ posts }) => {
    return ( 
        posts.map((post) => {
            return ( 
                <h4 key={post.id} >
                    <Link to={`/posts/${post.id}`}>
                        {post.label}
                    </Link>
                </h4>
             )
        })
     )
}
 
export default PostsList;