import * as types from "../actionTypes";
import axios from 'axios'

export const addToSongs = payload => ({
  type: types.ADD_SONGS,
  payload 
})

export const songsError = (payload ) => ({
  type: types.SONGS_ERROR,
  payload 
});

export const addToSongsGenre = payload => ({
  type: types.ADD_SONGS_GENRE_MUSIC,
  payload 
})

export const clickSongs = payload => ({
  type: types.CLICK_SONGS,
  payload 
});

export const nowPlaylist = payload => ({
  type: types.PLAYLIST_NOW,
  payload 
});
  
export const clickSongsAct = payload => dispatch => {
  // console.log(payload)
  dispatch(clickSongs(payload));
}

// export const clickSongsAct = id => dispatch => ({
//   // console.log(payload)
//   dispatch(clickSongs(payload));
// })
