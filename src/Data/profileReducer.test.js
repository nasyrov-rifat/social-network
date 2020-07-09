import React from 'react';
import profileReducer, {addPost, deletePost} from "./profileReducer";

let state = {
    posts: [
        {id: 1, message: 'Hi! It is my first post!', likes: 21},
        {id: 2, message: 'How are you?', likes: 15}
    ]
}

test('post must be added', () => {
    let action = addPost ('example')
    let newState = profileReducer (state, action)
    expect (newState.posts.length).toBe(3)
})

test('correct post text', () => {
    let action = addPost ('example')
    let newState = profileReducer (state, action)
    expect (newState.posts[2].message).toBe('example')
})

test('post must be deleted', () => {
    let action = deletePost (1)
    let newState = profileReducer (state, action)
    expect (newState.posts.length).toBe(1)
})

test('post DO NOT must be deleted cause id - incorrect', () => {
    let action = deletePost (9999)
    let newState = profileReducer (state, action)
    expect (newState.posts.length).toBe(2)
})