import * as types from "../actionTypes";
import axios from 'axios';
import { addClass } from '../addClass';

export const addToSongs = (payload) => ({
  type: types.ADD_SONGS,
  payload
})

export const itemsError = (payload ) => ({
  type: types.ITEMS_ERROR,
  payload 
});

export const itemsLoading = (payload ) => ({
  type: types.ITEMS_LOADING,
  payload 
});

export const fetchToDos = url => dispatch => {
    dispatch(itemsLoading(true));
    axios.get(url)
    .then(response => {
      const payload = response.data
      dispatch({ type: types.ADD_SONGS, payload });
      dispatch(itemsLoading(false));
    })
    .catch( error => {
      dispatch(itemsError(true));
    });
};

export const fetchGenreMusic = url => dispatch => {
  dispatch(itemsLoading(true));
  axios.get(url)
  .then(response => {
    const payload = response.data
    addClass(payload.data)
    dispatch({ type: types.ADD_SONGS_GENRE_MUSIC, payload });
    dispatch(itemsLoading(false));
  })
  .catch( error => {
    dispatch(itemsError(true));
  });
};