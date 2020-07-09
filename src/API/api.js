import * as axios from "axios";

const API = axios.create({
    withCredentials: true,
    headers: {'API-KEY': 'fe52ee0f-66d6-4916-98ef-cd007d551b42'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})
export const funcAPI = {
    getUsers: (currentPage, pageSize) => {
        return API.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    deleteUser: (id) => {
        return API.delete(`follow/${id}`)
            .then(response => response.data)
    },
    postUser: (id) => {
        return API.post(`follow/${id}`)
            .then(response => response.data)
    },
    getMyProfile: (Id) => {
        return API.get(`profile/` + Id)
            .then(response => response.data)
    },
    getUserStatus: (id) => {
        return API.get(`profile/status/` + id)
            .then(response => response.data)
    },
    updateUserStatus: (status) => {
        return API.put(`profile/status`, {status})
    },
    authMe: () => {
        return API.get(`auth/me`)
            .then(response => response.data)
    },
    logIn: (email, password, rememberMe = false, captcha) => {
        return API.post(`/auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data)
    },
    logOut: () => {
        return API.delete(`/auth/login`)
            .then(response => response.data)
    },
    saveAva: (photoFile) => {
        const formData = new FormData();
        formData.append("image", photoFile);
        return API.put(`profile/photo`, formData)
    },

    saveProfileInfo:(profile) => {
        return API.put(`profile`, profile)
    },
    getCaptchaURL:() => {
        return API.get(`security/get-captcha-url`)
            .then(response => response.data)
    },
}