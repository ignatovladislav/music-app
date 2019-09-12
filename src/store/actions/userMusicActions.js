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

export const addAlbum = payload => ({
  type: types.ADD_ALBUM,
  payload 
})

export const addAlbumSuccess = payload => ({
  type: types.ADD_ALBUM_SUCCESS,
  payload 
})

export const deleteTrack = payload => ({
  type: types.DELETE_TRACK,
  payload 
})

export const deleteTrackSuccess = payload => ({
  type: types.DELETE_TRACK_SUCCESS,
  payload 
})

export const deletePlaylist = payload => ({
  type: types.DELETE_PLAYLIST,
  payload 
})

export const deletePlaylistSuccess = payload => ({
  type: types.DELETE_PLAYLIST_SUCCESS,
  payload 
})

export const deleteAlbum = payload => ({
  type: types.DELETE_ALBUM,
  payload 
})

export const deleteAlbumSuccess = payload => ({
  type: types.DELETE_ALBUM_SUCCESS,
  payload 
})


export const songsError = (payload ) => ({
  type: types.SONGS_ERROR,
  payload 
});