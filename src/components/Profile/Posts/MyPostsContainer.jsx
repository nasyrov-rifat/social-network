import React from 'react';
import {addPost} from "../../../Data/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect (mapStateToProps, {addPost}) (MyPosts);

export default MyPostsContainer;