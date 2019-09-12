import React, { Component } from 'react'
import { connect } from 'react-redux'
import { artistInfo, trackNowInPlayer } from '../../store/actions/musicActions'
import { addTrack } from '../../store/actions/userMusicActions'
import './ArtistContainers.css'

import { Loading } from '../../components/Loading/Loading';
import Container from './Container';

export class ArtistContainers extends Component {
    state = { loading: true }
    componentDidMount() {
        this.timeOut()
        this.props.artistInfo(this.props.history.location.pathname.split('/')[2]);
    }

    handleClick = e => {
        this.props.history.push(`/album/${e.target.id}`)
    }

    timeOut = () => 
        new Promise(resolve => {
        setTimeout(() => {
            this.setState(prevState => ({  loading: !prevState.loading }))
        }, 3000);
    });

    render() {
        const { artist_info_success, artist_tracklist_success, artist_album_success, history, addTrack, trackNowInPlayer } = this.props;
        if (this.state.loading) return <Loading />
        return (
            <>
                {
                    artist_info_success && artist_tracklist_success && artist_album_success ? 
                    <Container
                        artist_info_success={artist_info_success}
                        artist_tracklist_success={artist_tracklist_success}
                        artist_album_success={artist_album_success}
                        history={history}
                        playNow={trackNowInPlayer}
                        addTrack={addTrack}
                    /> : null
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

const mapDispatchToProps = dispatch => ({
    artistInfo: url => dispatch(artistInfo(url)),
    trackNowInPlayer: url => dispatch(trackNowInPlayer(url)),
    addTrack: url => (dispatch(addTrack(url))),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtistContainers)
