import {funcAPI} from "../API/api";

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET_USERS'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'users/SET_TOTAL_COUNT'
const TOOGLE_IS_FETCHING = 'users/TOOGLE_IS_FETCHING'

let initializationState = {
    users: [],
    pageSize: 20,
    totalCount: 0,
    currentPage: 1,
    isFetching: false
}

let usersReducer = (state = initializationState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
            ...state,
            users: state.users.map (u => {if (u.id === action.userID) {
                return {...u, followed: true}
    }
    return u;
                })
        }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map (u => {if (u.id === action.userID) {
                    return {...u, followed: false}
                }
                    return u;
                })
            }
        case SET_USERS:{
            return {...state, users: [...action.users]}
        }
        case SET_CURRENT_PAGE:{
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_COUNT:{
            return {...state, totalCount: action.count}
        }
        case TOOGLE_IS_FETCHING:{
            return {...state, isFetching: action.isFetching}
        }
        default:{
            return state;
        }
    }
}

export default usersReducer;

export const follow = (userID) => {return {type: FOLLOW, userID}}
export const unfollow = (userID) => {return {type: UNFOLLOW, userID}}
export const setUsers = (users) => {return {type: SET_USERS, users}}
export const setCurrentPage = (page) => {return {type: SET_CURRENT_PAGE, currentPage: page}}
export const setTotalCount = (count) => {return{type: SET_TOTAL_COUNT, count}}
export const toggleIsFetching = (isFetching) => {return{type: TOOGLE_IS_FETCHING, isFetching}}

export const setUsersTC = (currentPage, pageSize) => async (dispatch) => {
        dispatch (toggleIsFetching(true));
        let data = await funcAPI.getUsers(currentPage, pageSize)
            dispatch(setCurrentPage(currentPage))
            dispatch (setUsers(data.items))
            dispatch (setTotalCount(data.totalCount))
            dispatch (toggleIsFetching(false))
}

export const deleteUserTC = (id) => async (dispatch) => {
        let data = await funcAPI.deleteUser(id)
            if (data.resultCode === 0) {
                dispatch (unfollow(id))
            }
}

export const postUserTC = (id) => async (dispatch) => {
    let data = await funcAPI.postUser(id)
    if (data.resultCode === 0) {
        dispatch(follow(id))
    }
}