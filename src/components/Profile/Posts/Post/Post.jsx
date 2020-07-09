import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://sun9-66.userapi.com/c847218/v847218740/10534a/UnsZsUOinfc.jpg?ava=1"/>
            <span className={s.postText}>{props.message}</span> <br/>
            <span className={s.likes}>{props.likes} <img
                src="https://static.thenounproject.com/png/1548939-200.png"/></span>
        </div>
    )
}

export default Post;