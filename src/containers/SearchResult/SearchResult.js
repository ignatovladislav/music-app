import React, { Component } from 'react'
import './SearchResult.css'

import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { searchAllAction } from '../../store/actions/musicActions'
import { Loading } from '../../components/Loading/Loading';

import { PreviewTracks } from '../../components/deezerMusic/Search/Preview/PreviewTracks';
import PreviewArtist from '../../components/deezerMusic/Search/Preview/PreviewArtist';
import PreviewAlbum from '../../components/deezerMusic/Search/Preview/PreviewAlbum';
import PreviewPlaylist from '../../components/deezerMusic/Search/Preview/PreviewPlaylist';

export class SearchResult extends Component {
    componentDidMount() {
        this.props.searchAllAction(this.props.history.location.pathname.split('/')[2])
        console.log(this.props.history.location.pathname.split('/')[2])
    }
    render() {
        const { auth, search_track_success, search_artist_success, search_album_success, search_playlist_success, history } = this.props;

        if (!auth.uid) return <Redirect to='/' />
        return (
            <div className='search_result_container'>
                <h2>Serch result: {history.location.pathname.split('/')[2]}</h2>
                {
                    search_track_success ? <PreviewTracks preview_tracks={search_track_success} />: <Loading />
                }
                {
                    search_artist_success ? <PreviewArtist preview_artist={search_artist_success}/> : <Loading />
                }
                {
                    search_album_success ? <PreviewAlbum preview_album={search_album_success} /> : <Loading />
                }
                {
                    search_playlist_success ?  <PreviewPlaylist preview_playlist={search_playlist_success} /> : <Loading />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    error: state.music.error,
    auth: state.firebase.auth,
    search_track_success: state.music.search_track_success,
    search_artist_success: state.music.search_artist_success,
    search_album_success: state.music.search_album_success,
    search_playlist_success: state.music.search_playlist_success
})

const mapDispatchToProps = dispatch => {
    return {
        searchAllAction: url => (dispatch(searchAllAction(url)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult)
