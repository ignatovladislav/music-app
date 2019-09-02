import * as types from "../actionTypes";

const initilalState = {
  songs: {},
  genreMusic: [],
  loading: null,
  error: false,
//   track_now: null,
  playlist_now: null
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
            // console.log('click', action.payload)
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

        default:
            return state;
    }
}