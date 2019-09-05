import * as types from "../actionTypes";

export const addToSongs = payload => ({
  type: types.ADD_SONGS,
  payload 
})

export const addToSongsSuccess = payload => ({
  type: types.ADD_SONGS_SUCCESS,
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

export const addToSongsGenreSuccess = payload => ({
  type: types.ADD_SONGS_GENRE_MUSIC_SUCCESS,
  payload 
})

export const playlistTrackList = payload => ({
  type: types.PLAYLIST_NOW,
  payload 
});

export const playlistTrackListSuccess = payload => ({
  type: types.PLAYLIST_NOW_SUCCESS,
  payload 
});
  

export const albumTrackList = payload => ({
  type: types.ALBUM_NOW,
  payload 
});

export const albumTrackListSuccess = payload => ({
  type: types.ALBUM_NOW_SUCCESS,
  payload 
});

export const artistInfo = payload => ({
  type: types.ARTIST_NOW,
  payload 
});

export const artistInfoSuccess = payload => ({
  type: types.ARTIST_NOW_SUCCESS,
  payload 
});

export const artistTopTrackSuccess = payload => ({
  type: types.ARTIST_NOW_TOP_TRACK_SUCCESS,
  payload 
});

export const countryChartList = payload => ({
  type: types.COUNTRY_LIST,
  payload 
});

export const countryChartListlSuccess = payload => ({
  type: types.COUNTRY_LIST_SUCCESS,
  payload 
});