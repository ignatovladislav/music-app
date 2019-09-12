import React, { Component } from 'react'
import { connect } from 'react-redux'
import { playlistTrackList, trackNowInPlayer } from '../../store/actions/musicActions'
import { addTrack, addPlaylist, deletePlaylist } from '../../store/actions/userMusicActions'
import './PlaylistContainers.css'

import { Loading } from '../../components/Loading/Loading';
import Container from './Container';

export class PlaylistContainers extends Component {
    state = { loading: true, add_album: false }
    componentDidMount() {
        if(this.contains(this.props.user_playlist, this.props.location.pathname.split('/')[2])) {
            this.setState({ add_album: true })
            this.timeOut()
            this.props.playlistTrackList(this.props.history.location.pathname.split('/')[2])   
        } else {
            this.timeOut()
            this.props.playlistTrackList(this.props.history.location.pathname.split('/')[2])   
        }
       
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.user_playlist !== this.props.user_playlist) {
            if (this.contains(this.props.user_playlist, this.props.playlist_info)) {
                this.setState({ add_album: true })
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
        this.setState(prevState => ({ add_album: !prevState.add_album }))
    }

    deletePlaylist = e => {
        this.props.deletePlaylist(e.target.id)
        this.setState(prevState => ({ add_album: !prevState.add_album }))
    }

    timeOut = () => 
            new Promise(resolve => {
            setTimeout(() => {
                this.setState(prevState => ({  loading: !prevState.loading }))
            }, 2000);
    });
    

    render() {
        const { playlist_now, playlist_info, user_playlist, user_track } = this.props;
        const { loading, add_album } = this.state;

        if (loading) return <Loading />
        return (
            <>
                <Container 
                    user_track={user_track}
                    user_playlist={user_playlist}
                    playlist_now={playlist_now} 
                    playlist_info={playlist_info} 
                    state_button={add_album}
                    playNow={this.trackNow}
                    addTrack={this.addTrack}
                    addPlaylist={this.addPlaylist}
                    deletePlaylist={this.deletePlaylist}
                    // state_button={}
                /> 
            </>
        )
    }
}

const mapStateToProps = state => ({
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
