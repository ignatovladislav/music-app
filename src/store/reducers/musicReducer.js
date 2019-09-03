import * as types from "../actionTypes";

const initilalState = {
  songs: {},
  genreMusic: [],
  loading: null,
  error: null,
  playlist_now: null,
  album_now: null,
  album_now_success: null,
  artist_now: null,
  artist_now_success: null,
  artist_now_top_50: null,
};


export default (state = initilalState, action) => {
    switch (action.type) {
        case types.ADD_SONGS: 
            return {
                ...state,
                songs: action.payload
            }

        case types.ADD_SONGS_SUCCESS: 
                return {
                    ...state,
                    songs: action.payload
                }
        case types.ADD_SONGS_GENRE_MUSIC: 
            return {
                ...state,
                genreMusic: action.payload
            }
        case types.ADD_SONGS_GENRE_MUSIC_SUCCESS: 
            return {
                ...state,
                genreMusic: action.payload
            }

        case types.SONGS_LOADING: {
            return {
                ...state,
                loading: false
            };
        }
        
        case types.PLAYLIST_NOW: {
            return {
                ...state,
                playlist_now: action.payload
            };
        }

        case types.PLAYLIST_NOW_SUCCESS: {
            return {
                ...state,
                playlist_now: action.payload
            };
        }

        case types.ALBUM_NOW: {
            return {
                ...state,
                album_now: action.payload
            };
        }

        case types.ALBUM_NOW_SUCCESS: {
            return {
                ...state,
                album_now_success: action.payload,
            };
        }

        case types.ARTIST_NOW: {
            return {
                ...state,
                artist_now: action.payload
            };
        }

        case types.ARTIST_NOW_SUCCESS: {
            return {
                ...state,
                artist_now_success: action.payload,
            };
        }

        case types.ARTIST_NOW_TOP_TRACK_SUCCESS: {
            return {
                ...state,
                artist_now_top_50: action.payload,
            };
        }

        case types.SONGS_ERROR: {
            return {
                ...state,
                error: action.payload
            };
        }

        default:
            return state;
    }
}