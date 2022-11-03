import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

const Post = ({ id, posts, history }) => {
    
    const historyHook = useHistory() // используем хук вместо передачи параметров

    const postId = +useParams().postId // используем хук вместо передачи параметров

    const post = posts.find((post) => post.id === postId)

    const handleSave = () => {
        historyHook.push('/posts') // можно вернуться на пред. страницу
        // history.replace('/posts') // нельзя вернуться на пред. страницу
    }

    return ( 
        post 
            ? (
                <>
                    <h4>{post.label}</h4>
                    <button onClick={handleSave}>Сохранить</button>
                </>
            )
            : ( 
                <h4>Post not found</h4>
            )
     );
}
 
export default Post;