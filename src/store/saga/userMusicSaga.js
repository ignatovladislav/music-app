import { takeEvery, call, put } from 'redux-saga/effects'
import { ADD_TRACK } from "../actionTypes"
import * as actions from '../actions/userMusicActions'
import axios from 'axios'

const urlTrack = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/track';

export function* addTrackSaga(data) {
    const track = data.payload;
    try {
		const response = yield call(axios, {
            method: "get",
            url: `${urlTrack}/${track}`
        });
        const tracks = response.data;
        const a = localStorage.setItem("myKey",JSON.stringify(tracks));
        yield put(actions.addTrackSuccess(tracks));
	} catch (error) {
		yield put(actions.songsError(error));
	}
    
}


export function* watcherUserMusicSaga() {
    yield takeEvery(ADD_TRACK, addTrackSaga);
}
