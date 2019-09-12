import * as types from "../actionTypes"

const initialState = {
    authError: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_ERROR: 
            return {
                ...state,
                authError: action.payload
            }
        case types.LOGIN_SUCCESS: 
            return {
                ...state,
                authError: null,
            }
        case types.SIGNOUT_SUCCESS:
            return state;
        case types.SIGNUP_SUCCESS: 
            return {
                ...state,
                authError: null
            }
        case types.SIGNUP_ERROR: 
            return {
                ...state,
                authError: action.err.message
            }
        case types.LOGIN_SUCCESS_GOOGLE:
            return {
                ...state,
                authError: null
            }
        default :
            return state;
    }
} 

export default authReducer;