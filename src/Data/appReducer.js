import {authMeTC} from "./authReducer";

const SET_INITIALIZED = 'app/SET_INITIALIZED'

let initializationState = {
    initialized: false
}

let appReducer = (state = initializationState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {...state,
                    initialized: true}
        default:
            return state;
    }
};

export default appReducer;

export const initializedAC = () => {
    return {type: SET_INITIALIZED}
}


export const initializedTC = () => async (dispatch) => {
    await dispatch (authMeTC());
    dispatch (initializedAC())
}