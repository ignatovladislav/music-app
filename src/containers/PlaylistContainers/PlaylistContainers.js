import React, { Component } from 'react'
import { connect } from 'react-redux'
import { playlistTrackList } from '../../store/actions/musicActions'
import * as types from "../../store/actionTypes";
import { Redirect } from 'react-router-dom'
import './PlaylistContainers.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { Loading } from '../../components/Loading/Loading';
import { InfoPlaylist } from '../../components/deezerMusic/Playlist/InfoPlaylist';

export class PlaylistContainers extends Component {
    state = { playlist_info: null }
    componentDidMount() {
        this.props.addToSongs() 
        this.props.playlistTrackList(this.props.history.location.pathname.split('/')[3])
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.songs !== undefined && prevProps !== this.props) {
            this.filter(this.props.songs)
            console.log('asd')
        }
    }

    filter = data => {
        const id = +this.props.history.location.pathname.split('/')[3];
        if (data) {
            data = data.playlists.data;
            for (let i = 0; i < data.length; i++ ) {
                if (data[i].id === id) {
                    this.setState({ playlist_info: data[i] })
                }
            }
        }
 
    }

    render() {
        const { playlist_now, auth } = this.props;
        const { playlist_info } = this.state;

        if (!auth.uid) return <Redirect to='/' />
        return (
            <div className='playlist_containers'>
                <div className='catalog_header_playlist'>
                    {
                        playlist_info ? <InfoPlaylist info={playlist_info} length={playlist_now.length}/> : <Loading />
                    }
                </div>
                <div className='catalog_playlist'>
                {
                  Array.isArray(playlist_now)  ? playlist_now.map((el, index) => {
                      return (
                        <div className='item_playlist' id={el.id} key={el.id} >
                            <div className='index_item_playlist' >
                                { index+1 }
                                
                            </div>
                            <div className='index_item_playlist plus_icon'>
                                <FontAwesomeIcon icon={ faPlus } size='1x' />
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
      playlist_now: state.music.playlist_now
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToSongs: () => dispatch({ type: types.ADD_SONGS }),
        playlistTrackList: (creds) => dispatch(playlistTrackList(creds)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistContainers);
