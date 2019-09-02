import { takeEvery, takeLatest, call, put } from 'redux-saga/effects'
import {  ADD_SONGS, ADD_SONGS_GENRE_MUSIC, PLAYLIST_NOW } from "../actionTypes"
import * as actions from '../actions/musicActions'
// import { addClass } from '../addClass';

import axios from "axios"

const url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com'
const urlPlaylist = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist';

export function* musicSaga() {
	try {
		const response = yield call(axios, {
            method: "get",
            url: `${url}/chart`
        });
        const songs = response.data;

        yield put(actions.addToSongsSuccess(songs));
	} catch (error) {
		yield put(actions.songsError(error));
	}
}


export function* musicSagaGenre() {
	try {
		const response = yield call(axios, {
            method: "get",
            url: `${url}/genre`
        });
        const songs = response.data;
        yield put(actions.addToSongsGenreSuccess(songs.data));
	} catch (error) {
		yield put(actions.songsError(error));
	}
}

export function* playlistNowSaga(data) {
    console.log(data)
    const tracks = data.payload
	try {
		const response = yield call(axios, {
            method: "get",
            url: `${urlPlaylist}/${tracks}/tracks`
        });
        const playlist_track = response.data.data;
        yield put(actions.playlistTrackListSuccess(playlist_track));
	} catch (error) {
		yield put(actions.songsError(error));
	}
}

export function* watcherMusicSaga() {
    yield takeEvery(ADD_SONGS, musicSaga);
    yield takeEvery(ADD_SONGS_GENRE_MUSIC, musicSagaGenre);
    yield takeEvery(PLAYLIST_NOW, playlistNowSaga);
}
