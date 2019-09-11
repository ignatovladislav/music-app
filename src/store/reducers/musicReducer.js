import * as types from "../actionTypes";

const initilalState = {
  songs: {},
  genreMusic: [],
  loading: null,
  error: null,
  playlist_info: null,
  playlist_now: null,
  album_now: null,
  album_now_success: null,
  artist_now: null,
  artist_info_success: null,
  artist_tracklist_success: null,
  artist_album_success: null,
  country_list: null,
  country_list_success: null,
  search_all: null,
  search_track_success: null,
  search_artist_success: null,
  search_album_success: null,
  search_playlist_success: null,
  track_now: null,
  track_now_success: null,
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

        case types.PLAYLIST_INFO_SUCCESS: {
            return {
                ...state,
                playlist_info: action.payload
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

        case types.ARTIST_INFO_SUCCESS: {
            return {
                ...state,
                artist_info_success: action.payload,
            };
        }

        case types.ARTIST_TRACKLIST_SUCCESS: {
            return {
                ...state,
                artist_tracklist_success: action.payload,
            };
        }

        case types.ARTIST_ALBUM_SUCCESS: {
            return {
                ...state,
                artist_album_success: action.payload,
            };
        }

        case types.COUNTRY_LIST: {
            return {
                ...state,
                country_list: action.payload,
            };
        }

        case types.COUNTRY_LIST_SUCCESS: {
            return {
                ...state,
                country_list_success: action.payload,
            };
        }

        case types.SEARCH_ALL: {
            return {
                ...state,
                search_all: action.payload,
            };
        }

        case types.SEARCH_TRACK_SUCCESS: {
            return {
                ...state,
                search_track_success: action.payload,
            };
        }

        case types.SEARCH_ARTIST_SUCCESS: {
            return {
                ...state,
                search_artist_success: action.payload,
            };
        }

        case types.SEARCH_ALBUM_SUCCESS: {
            return {
                ...state,
                search_album_success: action.payload,
            };
        }

        case types.SEARCH_PLAYLIST_SUCCESS: {
            return {
                ...state,
                search_playlist_success: action.payload,
            };
        }
      
        case types.TRACK_NOW_IN_PLAYER: {
            return {
                ...state,
                track_now: action.payload,
            };
        }

        case types.TRACK_NOW_IN_PLAYER_SUCCESS: {
            return {
                ...state,
                track_now_success: action.payload,
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