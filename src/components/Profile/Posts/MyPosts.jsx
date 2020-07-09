import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLenghtCreator, required} from "../../validation/validation";
import {InputType} from "../../Common/FormControl/FormControl";

const MyPosts = (props) => {

    let PostsElements = ([...props.posts].map(
        (p) => <Post message={p.message} likes={p.likes} key={p.id}/>)).reverse();

    let addPost = (values) => {
        props.addPost(values.inputNewPost);
    }

    return (<div>
        <h2 className={s.h2}>Posts</h2>
        <AddPostReduxForm onSubmit={addPost}/>
        {PostsElements}
    </div>)
}

let maxLenght25 = maxLenghtCreator(25)

const addPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field className={s.input}
                       name='inputNewPost'
                       component={InputType}
                       placeholder='Enter your post...'
                       types='textarea'
                       validate={[required, maxLenght25]} />
            </div>
            <div>
                <button className={s.button_add}>Add new post</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({form: 'addPost'})(addPostForm)

export default MyPosts;