import { takeEvery, call, put } from 'redux-saga/effects'
import {  ADD_SONGS, ADD_SONGS_GENRE_MUSIC, PLAYLIST_NOW, ALBUM_NOW, ARTIST_NOW } from "../actionTypes"
import * as actions from '../actions/musicActions'

import axios from "axios"
import { addClass } from '../addClass';

const url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com'
const urlPlaylist = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist';
const urlAlbum = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/album';
const urlArtist = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist';
const urlArtistTop50 = 'https://cors-anywhere.herokuapp.com';

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
        addClass(songs)
        yield put(actions.addToSongsGenreSuccess(songs.data));
	} catch (error) {
		yield put(actions.songsError(error));
	}
}

export function* playlistNowSaga(data) {
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

export function* albumNowSaga(data) {
    const album = data.payload;
	try {
		const response = yield call(axios, {
            method: "get",
            url: `${urlAlbum}/${album}`
        });
        const album_info = response.data
        yield put(actions.albumTrackListSuccess(album_info));
	} catch (error) {
		yield put(actions.songsError(error));
	}
}

export function* aristNowSaga(data) {
    const artist = data.payload;
	try {
		const response = yield call(axios, {
            method: "get",
            url: `${urlArtist}/${artist}`
        });
        const artist_info = response.data // info artist
        yield put(actions.artistInfoSuccess(artist_info));
        try {
            const response = yield call(axios, {
                method: "get",
                url: `${urlArtistTop50}/${artist_info.tracklist}`
            });
            yield put(actions.artistTopTrackSuccess(response.data));
        } catch (error) {
            yield put(actions.songsError(error));
        }
        
	} catch (error) {
        yield put(actions.songsError(error));
	}
}

export function* watcherMusicSaga() {
    yield takeEvery(ADD_SONGS, musicSaga);
    yield takeEvery(ADD_SONGS_GENRE_MUSIC, musicSagaGenre);
    yield takeEvery(PLAYLIST_NOW, playlistNowSaga);
    yield takeEvery(ALBUM_NOW, albumNowSaga);
    yield takeEvery(ARTIST_NOW, aristNowSaga);
}
