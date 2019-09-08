import { takeEvery, call, put, all } from 'redux-saga/effects'
import {  ADD_SONGS, ADD_SONGS_GENRE_MUSIC, PLAYLIST_NOW, ALBUM_NOW, ARTIST_NOW, COUNTRY_LIST, SEARCH_ALL } from "../actionTypes"
import * as actions from '../actions/musicActions'

import axios from "axios"
import { addClass } from '../addClass';

const url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com'
const urlPlaylist = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist';
const urlAlbum = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/album';
const urlArtist = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist';
const urlSearch = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search'

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
        const [ playlist_info, playlist_track ] = yield all([
            axios.get(`${urlPlaylist}/${tracks}`),
            axios.get(`${urlPlaylist}/${tracks}/tracks`)
        ])
        console.log(playlist_info)

        yield put(actions.playlistInfoSuccess(playlist_info.data));
        yield put(actions.playlistTrackListSuccess(playlist_track.data.data));
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
        const [artist_info, artist_tracklist, artist_album] = yield all([
            axios.get(`${urlArtist}/${artist}`),
            axios.get(`${urlArtist}/${artist}/top`),
            axios.get(`${urlArtist}/${artist}/albums`)
        ])
        yield put(actions.artistInfoSuccess(artist_info.data))
        yield put(actions.artistTracklistSuccess(artist_tracklist.data.data))
        yield put(actions.artistAlbumSuccess(artist_album.data.data))
	} catch (error) {
        yield put(actions.songsError(error));
	}
}

export function* countryPlaylist(data) {
    const country = data.payload;
	try {
		const response = yield call(axios, {
            method: "get",
            url: `${urlPlaylist}/${country}`
        });
        const playlist_track = response.data;
        yield put(actions.countryChartListlSuccess(playlist_track));
	} catch (error) {
		yield put(actions.songsError(error));
	}
}

export function* searchAll(data) {
    const search = data.payload;

	try {
        const [search_track, search_artist, search_album, search_playlist] = yield all([
            axios.get(`${urlSearch}/track?q=${search}`),
            axios.get(`${urlSearch}/artist?q=${search}`),
            axios.get(`${urlSearch}/album?q=${search}`),
            axios.get(`${urlSearch}/playlist?q=${search}`)
        ])
        yield put(actions.searchTrackSuccess(search_track.data.data))
        yield put(actions.searchArtistSuccess(search_artist.data.data))
        yield put(actions.searchAlbumSuccess(search_album.data.data))
        yield put(actions.searchPlaylistSuccess(search_playlist.data.data))
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
    yield takeEvery(COUNTRY_LIST, countryPlaylist);
    yield takeEvery(SEARCH_ALL, searchAll);
}
