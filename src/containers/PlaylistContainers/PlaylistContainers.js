import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { nowPlaylist } from '../../store/actions/musicActions'
import { PLAYLIST_NOW } from '../../store/actionTypes'

export class PlaylistContainers extends Component {
    state = { playlist: null }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.songs !== this.props.songs) {
            this.props.nowPlaylist(this.props.history.location.pathname.split('/')[3])
        } else if (prevState.playlist !== this.state.playlist) {
        }
        
    }
    render() {
        console.log(this.props)
        return (
            <div className='playlist_containers'>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      songs: state.music.songs,
      error: state.music.error,
      auth: state.firebase.auth,
      genreMusic: state.music.genreMusic,
      playlist_now: state.music.playlist_now
    }
}

const mapDispatchToProps = dispatch => {
    return {
        nowPlaylist: (creds) => dispatch({type: PLAYLIST_NOW, payload: creds}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistContainers);
