import * as types from "../actionTypes";

export const addTrack = payload => ({
  type: types.ADD_TRACK,
  payload 
})

export const addTrackSuccess = payload => ({
  type: types.ADD_TRACK_SUCCESS,
  payload 
})

export const addPlaylist = payload => ({
  type: types.ADD_PLAYLIST,
  payload 
})

export const addPlaylistSuccess = payload => ({
  type: types.ADD_PLAYLIST_SUCCESS,
  payload 
})

export const songsError = (payload ) => ({
  type: types.SONGS_ERROR,
  payload 
});