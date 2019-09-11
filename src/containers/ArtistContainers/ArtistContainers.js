import React, { Component } from 'react'
import { connect } from 'react-redux'
import { artistInfo, trackNowInPlayer } from '../../store/actions/musicActions'
import { addTrack } from '../../store/actions/userMusicActions'
import './ArtistContainers.css'

import { Loading } from '../../components/Loading/Loading';
import Container from './Container';

export class ArtistContainers extends Component {
    componentDidMount() {
        this.props.artistInfo(this.props.history.location.pathname.split('/')[2]);
    }

    handleClick = e => {
        this.props.history.push(`/album/${e.target.id}`)
    }

    trackNow = e => {
        this.props.trackNowInPlayer(e.target.id)
    }

    addTrack = e => {
        this.props.addTrack(e.target.id)
    }

    render() {
        const { artist_info_success, artist_tracklist_success, artist_album_success  } = this.props;
        return (
            <>
                {
                    artist_info_success && artist_tracklist_success && artist_album_success ? 
                    <Container
                        artist_info_success={artist_info_success}
                        artist_tracklist_success={artist_tracklist_success}
                        artist_album_success={artist_album_success}
                        playNow={this.trackNow}
                        addTrack={this.addTrack}
                    /> : <Loading />
                }
            </>
        )
    }
}

const mapStateToProps = state => ({
    artist_info_success: state.music.artist_info_success,
    artist_tracklist_success: state.music.artist_tracklist_success,
    artist_album_success: state.music.artist_album_success,
    error: state.music.error,
})

const mapDispatchToProps = dispatch => {
    return {
        artistInfo: url => dispatch(artistInfo(url)),
        trackNowInPlayer: url => dispatch(trackNowInPlayer(url)),
        addTrack: url => (dispatch(addTrack(url))),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ArtistContainers)
