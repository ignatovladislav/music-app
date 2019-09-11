import React, { Component } from 'react'
import { connect } from 'react-redux'
import { albumTrackList, trackNowInPlayer } from '../../store/actions/musicActions'
import { addTrack } from '../../store/actions/userMusicActions'
import './AlbumContainers.css'

import { Loading } from '../../components/Loading/Loading';
import Container from './Container';

export class AlbumContainers extends Component {
    componentDidMount() {
        this.props.albumTrackList(this.props.history.location.pathname.split('/')[2]);
    }

    trackNow = e => {
        this.props.trackNowInPlayer(e.target.id)
    }

    addTrack = e => {
        this.props.addTrack(e.target.id)
    }
    
    render() {
        const { album_now_success } = this.props;
        return (
            <>
            {
                album_now_success ? <Container album_now_success={album_now_success} playNow={this.trackNow} addTrack={this.addTrack} /> 
                : <Loading />
            }
            </>
        )
    }
}


const mapStateToProps = state => {
    return {
      error: state.music.error,
      auth: state.firebase.auth,
      album_now_success: state.music.album_now_success,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        albumTrackList: (url) => dispatch(albumTrackList(url)),
        trackNowInPlayer: url => dispatch(trackNowInPlayer(url)),
        addTrack: url => (dispatch(addTrack(url))),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumContainers);