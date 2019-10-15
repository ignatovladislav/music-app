import React, { Component } from 'react'
import { connect } from 'react-redux'
import { albumTrackList, trackNowInPlayer } from '../../store/actions/musicActions'
import { addTrack, addAlbum, deleteAlbum } from '../../store/actions/userMusicActions'
import './AlbumContainers.css'

import { Loading } from '../../components/Loading/Loading';
import Container from './Container';

export class AlbumContainers extends Component {
    state = { add_album: false }
    componentDidMount() {
        if (this.contains(this.props.user_album, this.props.location.pathname.split('/')[2])) {
            this.setState({ add_album: true })
            this.props.albumTrackList(this.props.history.location.pathname.split('/')[2])   
        } else {
            this.props.albumTrackList(this.props.history.location.pathname.split('/')[2])   
        }
       
    }

    componentDidUpdate = (prevProps) => {
        if(prevProps.user_album !== this.props.user_album) {
            if(this.contains(this.props.user_album, this.props.album_now_success)) {
                this.setState({ add_album: true })
            }
        }
    }

    contains = (array, obj) => {
        return array.some(item => item.id === +obj)
    }

    trackNow = e => {
        this.props.trackNowInPlayer(e.target.id)
    }

    addTrack = e => {
        this.props.addTrack(e.target.id)
    }

    addAlbum = e => {
        this.props.addAlbum(e.target.id)
        this.setState(prevState => ({ add_album: !prevState.add_album }))
    }

    deleteAlbum = e => {
        this.props.deleteAlbum(e.target.id)
        this.setState(prevState => ({ add_album: !prevState.add_album }))
    }
    
    render() {
        const { album_now_success, isFetching } = this.props;
        const { add_album } = this.state;

        return (
            <>
            {
                !isFetching && album_now_success ? <Container 
                                        album_now_success={album_now_success} 
                                        playNow={this.trackNow} 
                                        addTrack={this.addTrack} 
                                        addAlbum={this.addAlbum}
                                        deleteAlbum={this.deleteAlbum}
                                        state_button={add_album}
                                    /> :  <Loading />
            }
            </>
        )
    }
}


const mapStateToProps = state => ({
    error: state.music.error,
    isFetching: state.music.isFetching,
    album_now_success: state.music.album_now_success,
    user_album: state.userMusic.user_album,
    user_track: state.userMusic.user_track
})

const mapDispatchToProps = dispatch => ({
    albumTrackList: (url) => dispatch(albumTrackList(url)),
    trackNowInPlayer: url => dispatch(trackNowInPlayer(url)),
    addTrack: url => (dispatch(addTrack(url))),
    addAlbum: url => dispatch(addAlbum(url)),
    deleteAlbum: url => dispatch(deleteAlbum(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(AlbumContainers);