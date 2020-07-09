import {funcAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER = 'auth/SET_AUTH_USER'
const GET_CAPTCHA = 'auth/GET_CAPTCHA'

let initializationState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaURL: null
}

let authReducer = (state = initializationState, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
            return {...state,
                    ...action.data}
        case GET_CAPTCHA:
            return {...state,
                ...action.payload}
        default:
            return state;
    }
};

export default authReducer;

export const setAuthUser = (id, login, email, isAuth) => {
    return {type: SET_AUTH_USER, data: {id, login, email, isAuth}}
}
export const getCaptchaAC = (captchaURL) => {
    return {type: GET_CAPTCHA, payload: {captchaURL}}
}


export const authMeTC = () => async (dispatch) => {
        return funcAPI.authMe ().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch (setAuthUser(id, login, email, true))
            }
        })
}

export const loginTC = (email, password, rememberMe, captcha) => async (dispatch) => {
   let data = await funcAPI.logIn (email, password, rememberMe, captcha)
        if (data.resultCode === 0) {
            dispatch (authMeTC())
        }
        else {
            if (data.resultCode === 10) {
                dispatch (getCaptchaUrlTC())
            }
            dispatch (stopSubmit('login', {_error: data.messages}))
        }
}

export const logoutTC = () => async (dispatch) => {
    let data = await funcAPI.logOut ()
        if (data.resultCode === 0) {
            dispatch (setAuthUser(null, null, null, false))
        }
}

export const getCaptchaUrlTC = () => async (dispatch) => {
    let data = await funcAPI.getCaptchaURL ()
    const captchaURL = data.url
        dispatch (getCaptchaAC(captchaURL))
}