import React from 'react';
import { useLocation } from 'react-router-dom';
import query from 'query-string'
import _ from 'lodash'
import Post from './Post';
import PostsList from './PostsList';

const Posts = ({ match, location, history }) => {

    const locationHook = useLocation() // используем хук вместо передачи параметров

    const posts = [
        { id: 1, label: 'Post 1' },
        { id: 2, label: 'Post 2' },
        { id: 3, label: 'Post 3' }
      ]

    const postId = +match.params.postId

    const search = query.parse(locationHook.search)

    const cropPosts = Object.keys(search).length
                        ? _(posts).slice(0).take(search.count).value() 
                        : posts
    
    return ( 
        postId 
        ? <Post 
            id={postId}
            {...{posts}}
            {...{history}} /> 
        : <PostsList posts={cropPosts} />
    )
}
 
export default Posts;