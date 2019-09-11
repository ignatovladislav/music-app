import { takeEvery, call, put } from 'redux-saga/effects'
import { ADD_TRACK, ADD_PLAYLIST } from "../actionTypes"
import * as actions from '../actions/userMusicActions'
import axios from 'axios'

const urlTrack = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/track';
const urlPlaylist = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist';

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


export function* watcherUserMusicSaga() {
    yield takeEvery(ADD_TRACK, addTrackSaga);
    yield takeEvery(ADD_PLAYLIST, addPlaylistSaga);
}
