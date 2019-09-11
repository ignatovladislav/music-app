import * as types from "../actionTypes";

const initilalState = {
    user_track: [],
    user_playlist: [],
    track_error: null,
};

export default (state = initilalState, action) => {
    switch (action.type) {
        case types.ADD_TRACK_SUCCESS: 
            return {
                ...state,
                user_track: [...state.user_track, action.payload]
            }
        case types.ADD_PLAYLIST_SUCCESS: 
            return {
                ...state,
                user_playlist: [...state.user_playlist, action.payload]
            }
        case types.SONGS_ERROR: 
            return {
                ...state,
                track_error: action.payload
            }
        default:
            return state;
    }
}