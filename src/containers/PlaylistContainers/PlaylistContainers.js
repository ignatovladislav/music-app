import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Loading } from '../../components/Loading/Loading'
import Container from './Container'

import { playlistTrackList, trackNowInPlayer } from '../../store/actions/musicActions'
import { addTrack, addPlaylist, deletePlaylist } from '../../store/actions/userMusicActions'
import './PlaylistContainers.css'


export class PlaylistContainers extends Component {
    state = { state_button: false }
    componentDidMount() {
        if (this.contains(this.props.user_playlist, this.props.location.pathname.split('/')[2])) {
            this.setState({ state_button: true })
            this.props.playlistTrackList(this.props.history.location.pathname.split('/')[2])   
        } else {
            this.props.playlistTrackList(this.props.history.location.pathname.split('/')[2])   
        }
       
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.user_playlist !== this.props.user_playlist) {
            if (this.contains(this.props.user_playlist, this.props.playlist_info)) {
                this.setState({ state_button: true })
            }
        } 
    }

    contains = (array, obj) => {
        return array.some(item => item.id === +obj)
    }

    addTrack = e => {   
        this.props.addTrack(e.target.id)
    }

    trackNow = e => {
        this.props.trackNowInPlayer(e.target.id)
    }

    addPlaylist = e => {
        this.props.addPlaylist(e.target.id)
        this.setState(prevState => ({ state_button: !prevState.state_button }))
    }

    deletePlaylist = e => {
        this.props.deletePlaylist(e.target.id)
        this.setState(prevState => ({ state_button: !prevState.state_button }))
    }
    
    render() {
        const { playlist_now, playlist_info, user_playlist, user_track, isFetching } = this.props;
        const { state_button } = this.state;
        return (
            <>
                {
                    !isFetching && playlist_info && playlist_now ? <Container 
                                    user_track={user_track}
                                    user_playlist={user_playlist}
                                    playlist_now={playlist_now} 
                                    playlist_info={playlist_info} 
                                    state_button={state_button}
                                    playNow={this.trackNow}
                                    addTrack={this.addTrack}
                                    addPlaylist={this.addPlaylist}
                                    deletePlaylist={this.deletePlaylist}
                                /> : <Loading />
                }
            </>
        )
    }
}

const mapStateToProps = state => ({
    isFetching: state.music.isFetching,
    playlist_now: state.music.playlist_now,
    playlist_info: state.music.playlist_info,
    user_playlist: state.userMusic.user_playlist,
    user_track: state.userMusic.user_track
})

const mapDispatchToProps = dispatch => ({
    playlistTrackList: (creds) => dispatch(playlistTrackList(creds)),
    addTrack: url => dispatch(addTrack(url)),
    trackNowInPlayer: url => dispatch(trackNowInPlayer(url)),
    addPlaylist: url => dispatch(addPlaylist(url)),
    deletePlaylist: url => dispatch(deletePlaylist(url)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistContainers);
