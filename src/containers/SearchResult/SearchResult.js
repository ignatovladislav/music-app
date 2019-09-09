import React, { Component } from 'react'
import './SearchResult.css'

import { connect } from 'react-redux'

import { searchAllAction } from '../../store/actions/musicActions'
import { Loading } from '../../components/Loading/Loading';

import { PreviewTracks } from '../../components/deezerMusic/Search/Preview/PreviewTracks';
import PreviewArtist from '../../components/deezerMusic/Search/Preview/PreviewArtist';
import PreviewAlbum from '../../components/deezerMusic/Search/Preview/PreviewAlbum';
import PreviewPlaylist from '../../components/deezerMusic/Search/Preview/PreviewPlaylist';

export class SearchResult extends Component {
    componentDidMount() {
        this.props.searchAllAction(this.props.history.location.pathname.split('/')[2])
        // console.log(this.props.history.location.pathname.split('/')[2])
    }
    render() {
        const { search_track_success, search_artist_success, search_album_success, search_playlist_success, history } = this.props;
        console.log(this.props)
        // if (!auth.uid) return <Redirect to='/' />
        return (
            <div className='search_result_container'>
                <h2>Serch result: {history.location.pathname.split('/')[2]}</h2>
                {
                    search_track_success ? <PreviewTracks history={history} preview_tracks={search_track_success} data='tracks'/> : <Loading />
                }
                {
                    search_artist_success ? <PreviewArtist preview_artist={search_artist_success} data='artist' /> : <Loading />
                }
                {
                    search_album_success ? <PreviewAlbum preview_album={search_album_success} data='album' /> : <Loading />
                }
                {
                    search_playlist_success ?  <PreviewPlaylist preview_playlist={search_playlist_success} data='playlist' /> : <Loading />
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
    search_playlist_success: state.music.search_playlist_success,
    userMusic: state.userMusic.userMusic
})

const mapDispatchToProps = dispatch => {
    return {
        searchAllAction: url => (dispatch(searchAllAction(url)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult)
