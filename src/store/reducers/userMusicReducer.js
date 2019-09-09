import * as types from "../actionTypes";

const initilalState = {
    user_track: [],
    track_error: null,
};

export default (state = initilalState, action) => {
    switch (action.type) {
        case types.ADD_TRACK_SUCCESS: 
            return {
                ...state,
                user_track: [...state.user_track, action.payload]
            }
        default:
            return state;
    }
}