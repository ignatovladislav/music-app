import * as types from "../actionTypes"

const initialState = {
    authError: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_ERROR: 
        console.log('login_error')
            return {
                ...state,
                authError: action.payload
            }
        case types.LOGIN_SUCCESS: 
        console.log('login_success')
            return {
                ...state,
                authError: null,
            }
        case types.SIGNOUT_SUCCESS:
            console.log('SIGNOUT_SUCCESS');
            return state;
        case types.SIGNUP_SUCCESS: 
        console.log('signup success')
            return {
                ...state,
                authError: null
            }
        case types.SIGNUP_ERROR: 
            console.log('signup error') 
            return {
                ...state,
                authError: action.err.message
            }
        default :
            return state;
    }
} 

export default authReducer;