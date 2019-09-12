import * as types from "../actionTypes";

const initilalState = {
    user_track: [],
    user_playlist: [],
    user_album: [],
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
        case types.ADD_ALBUM_SUCCESS: 
            return {
                ...state,
                user_album: [...state.user_album, action.payload]
            }
        case types.DELETE_TRACK_SUCCESS:
            const userTrack = state.user_track.filter(elem => elem.id !== +action.payload)
            return {
                ...state,
                user_track: userTrack
            }
        case types.DELETE_PLAYLIST_SUCCESS:
            const userPlaylist = state.user_playlist.filter(elem => elem.id !== +action.payload)
            return {
                ...state,
                user_playlist: userPlaylist
            }
        case types.DELETE_ALBUM_SUCCESS:
                const userAlbum = state.user_album.filter(elem => elem.id !== +action.payload)
                return {
                    ...state,
                    user_album: userAlbum
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