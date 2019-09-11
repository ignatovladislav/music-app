import React, { Component } from 'react'
import './SearchResult.css'

import { connect } from 'react-redux'
import { searchAllAction, trackNowInPlayer } from '../../store/actions/musicActions'
import { addTrack } from '../../store/actions/userMusicActions'

import { Loading } from '../../components/Loading/Loading';

import Container from './Container'

export class SearchResult extends Component {
    componentDidMount() {
        this.props.searchAllAction(this.props.history.location.pathname.split('/')[2])
    }

    trackNow = e => {
        this.props.trackNowInPlayer(e.target.id)
    }

    addTrack = e => {   
        this.props.addTrack(e.target.id)
    }
    render() {
        const { search_track_success, search_artist_success, search_album_success, search_playlist_success } = this.props;
        return (
            <div className='search_result_container'>
                {
                    search_track_success && search_artist_success && search_album_success && search_playlist_success ? 
                                                                                                                <Container 
                                                                                                                    {...this.props}
                                                                                                                    playNow={this.trackNow}
                                                                                                                    addTrack={this.addTrack}
                                                                                                                /> : <Loading />
                }               
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    error: state.music.error,
    search_track_success: state.music.search_track_success,
    search_artist_success: state.music.search_artist_success,
    search_album_success: state.music.search_album_success,
    search_playlist_success: state.music.search_playlist_success,
    user_track: state.userMusic.user_track
})

const mapDispatchToProps = dispatch => {
    return {
        searchAllAction: url => (dispatch(searchAllAction(url))),
        trackNowInPlayer: url => dispatch(trackNowInPlayer(url)),
        addTrack: url => dispatch(addTrack(url)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult)
