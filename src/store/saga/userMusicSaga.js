import { takeEvery, call, put } from 'redux-saga/effects'
import { ADD_TRACK, ADD_PLAYLIST, ADD_ALBUM, DELETE_TRACK, DELETE_PLAYLIST, DELETE_ALBUM } from "../actionTypes"
import * as actions from '../actions/userMusicActions'
import axios from 'axios'

const urlTrack = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/track';
const urlPlaylist = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist';
const urlAlbum = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/album';

export function* addTrackSaga(data) {
    const track = data.payload;
    try {
		const response = yield call(axios, {
            method: "get",
            url: `${urlTrack}/${track}`
        });
        const tracks = response.data;
        yield put(actions.addTrackSuccess(tracks));
	} catch (error) {
		yield put(actions.songsError(error));
	}
    
}

export function* addPlaylistSaga(data) {
    const playlist = data.payload;
    try {
		const response = yield call(axios, {
            method: "get",
            url: `${urlPlaylist}/${playlist}`
        });
        const playlist_info = response.data;
        yield put(actions.addPlaylistSuccess(playlist_info));
	} catch (error) {
		yield put(actions.songsError(error));
	}
    
}

export function* addAlbumSaga(data) {
    const album = data.payload;
    try {
		const response = yield call(axios, {
            method: "get",
            url: `${urlAlbum}/${album}`
        });
        const album_info = response.data;
        album_info.addAlbum = true
        yield put(actions.addAlbumSuccess(album_info));
	} catch (error) {
		yield put(actions.songsError(error));
	}
}

export function* deleteTrackSaga(data) {
    const track = data.payload;
    yield put(actions.deleteTrackSuccess(track));
}

export function* deletePlaylistSaga(data) {
    const playlist = data.payload;
    yield put(actions.deletePlaylistSuccess(playlist));
}

export function* deleteAlbumSaga(data) {
    const album = data.payload;
    yield put(actions.deleteAlbumSuccess(album));
}

export function* watcherUserMusicSaga() {
    yield takeEvery(ADD_TRACK, addTrackSaga);
    yield takeEvery(ADD_PLAYLIST, addPlaylistSaga);
    yield takeEvery(ADD_ALBUM, addAlbumSaga);
    yield takeEvery(DELETE_TRACK, deleteTrackSaga);
    yield takeEvery(DELETE_PLAYLIST, deletePlaylistSaga);
    yield takeEvery(DELETE_ALBUM, deleteAlbumSaga);
}
