import {funcAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'profile/ADD_POST'
const DELETE_POST = 'profile/DELETE_POST'
const SET_PROFILE = 'profile/SET_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const SET_AVA = 'profile/SET_AVA'

let initializationState = {
    posts: [
        {id: 1, message: 'Hi! It is my first post!', likes: 21},
        {id: 2, message: 'How are you?', likes: 15}
    ],
    profile: null,
    status: ''
}

let profileReducer = (state = initializationState, action) => {
    switch (action.type) {
            case ADD_POST:
                let newPost = {
                    id: 3,
                    message: action.newPostText,
                    likes: 0
                };
                return  {...state,
                posts: [...state.posts, newPost]
                }
        case DELETE_POST:
            return {...state,
                posts: state.posts.filter(p => p.id != action.postId)
            }

        case SET_PROFILE:{
            return {...state, profile: action.profile}
        }
        case SET_STATUS:{
            return {...state, status: action.status}
        }
        case SET_AVA:{
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default:
            return state;
    }
};

export default profileReducer;

export const addPost = (newPostText) => {
    return {type: ADD_POST, newPostText}
}

export const deletePost = (postId) => {
    return {type: DELETE_POST, postId}
}

export const setProfile = (profile) => {
    return {type: SET_PROFILE, profile}
}

export const setStatus = (status) => {
    return {type: SET_STATUS, status}
}

export const setAvaAC = (photos) => {
    return {type: SET_AVA, photos}
}

export const getMyProfileTC = (Id) => async (dispatch) => {
        let data = await funcAPI.getMyProfile (Id)
            dispatch (setProfile(data))
}

export const getStatusTC = (Id) => async (dispatch) => {
    let data = await funcAPI.getUserStatus (Id)
        dispatch (setStatus(data))
}

export const updateStatusTC = (status) => async (dispatch) => {
    let response = await funcAPI.updateUserStatus (status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
}

export const saveAvaTC = (file) => async (dispatch) => {
    let response = await funcAPI.saveAva (file)
    if (response.data.resultCode === 0) {
        dispatch(setAvaAC(response.data.data.photos))
    }
}

export const saveProfileTC = (profile) => async (dispatch, getState) => {
    const userID = getState().auth.id
    let response = await funcAPI.saveProfileInfo (profile)
    if (response.data.resultCode === 0) {
        dispatch(getMyProfileTC(userID))
    }
    else {
        dispatch (stopSubmit('profile-info', {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}