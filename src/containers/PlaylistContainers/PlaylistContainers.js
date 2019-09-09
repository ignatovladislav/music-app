import React, { Component } from 'react'
import { connect } from 'react-redux'
import { playlistTrackList } from '../../store/actions/musicActions'
import { addTrack } from '../../store/actions/userMusicActions'
import * as types from "../../store/actionTypes";
import './PlaylistContainers.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { Loading } from '../../components/Loading/Loading';
import { InfoPlaylist } from '../../components/deezerMusic/Playlist/InfoPlaylist';
import { AddAlbum } from '../../components/AddAlbum/AddAlbum';

export class PlaylistContainers extends Component {
    state = { playlist_info: null }
    componentDidMount() {
        this.props.addToSongs() 
        this.props.playlistTrackList(this.props.history.location.pathname.split('/')[2])
    }

    handleClick = e => {
        this.props.addTrack(e.target.id)
        console.log(e.target.id)
    }

    render() {
        const { playlist_now, playlist_info } = this.props;
        console.log(this.props)
        return (
            <div className='playlist_containers'>
                <div className='catalog_header_playlist'>
                    {
                        playlist_info ? <InfoPlaylist info={playlist_info} length={playlist_now.length}/> : <Loading />
                    }
                </div>
                {
                    playlist_info ? <AddAlbum /> : <Loading />
                }         
                <div className='catalog_playlist'>
                {
                  Array.isArray(playlist_now)  ? playlist_now.map((el, index) => {
                      return (
                        <div className='item_playlist' id={el.id} key={el.id} >
                            <div className='index_item_playlist' >
                                { index+1 }
                                
                            </div>
                            <div className='index_item_playlist plus_icon' id={el.id} onClick={this.handleClick}>
                                +
                                {/* <FontAwesomeIcon icon={ faPlus } size='1x' /> */}
                            </div>
                            <div className='index_item_playlist'>
                                <img src={el.album.cover_small} alt='exec' />
                            </div>
                            <div className='index_item_playlist'>{el.title}</div>
                            <div className='index_item_playlist'>{el.artist.name}</div>
                        </div>
                      )
                  }) : <Loading />
                }
                </div>
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
      playlist_now: state.music.playlist_now,
      playlist_info: state.music.playlist_info,
      user_track: state.userMusic.user_track
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToSongs: () => dispatch({ type: types.ADD_SONGS }),
        playlistTrackList: (creds) => dispatch(playlistTrackList(creds)),
        addTrack: url => dispatch(addTrack(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistContainers);
