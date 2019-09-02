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

        yield put(actions.addToSongs(songs));
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
        yield put(actions.addToSongsGenre(songs.data));
	} catch (error) {
		yield put(actions.songsError(error));
	}
}

// export function* musicSagaGenre() {
// 	try {
// 		const response = yield call(axios, {
//             method: "get",
//             url: `${url}/genre`
//         });
//         const songs = response.data;
//         yield put(actions.addToSongsGenre(songs.data));
// 	} catch (error) {
// 		yield put(actions.songsError(error));
// 	}
// }

export function* playlistNowSaga(data) {
    // yield console.log(data.payload)
    const tracks = data.payload
    // yield put(actions.nowPlaylist(songs.data));
	try {
		const response = yield call(axios, {
            method: "get",
            url: `${urlPlaylist}/${tracks}/tracks`
        });
        const playlist_track = response.data.data;
        // console.log(response)
        yield put(actions.nowPlaylist(playlist_track));
	} catch (error) {
		yield put(actions.songsError(error));
	}
}
// export function* clickSongsSaga(data) {
//     yield console.log(data.payload)
//     // const res = data.payload;
//     // yield console.log(data.payload)
//     // const songId = data.payload;
//     // yield put(actions.clickSongs(res));
//     // const res = data.
//     yield put(actions.clickSongs(data.payload))
//     // try {
//     //     const response = data.payload;
//     //     console.log(response)
//     //     yield put(actions.clickSongs(response))
//     // } catch (error) {
//     //     yield console.log(error)
// 	// 	// yield put(actions.songsError(error));
// 	// }
// }

export function* watcherMusicSaga() {
    yield takeEvery(ADD_SONGS, musicSaga);
    yield takeEvery(ADD_SONGS_GENRE_MUSIC, musicSagaGenre);
    yield takeEvery(PLAYLIST_NOW, playlistNowSaga);
}
