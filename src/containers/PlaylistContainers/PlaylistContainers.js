import React, { Component } from 'react'
import { connect } from 'react-redux'
import './PlaylistContainers.css'

import { playlistTrackList, addToSongs } from '../../store/actions/musicActions'
import * as types from "../../store/actionTypes";
import { Loading } from '../../components/Loading/Loading';
import { InfoPlaylist } from '../../components/deezerMusic/InfoPlaylist/InfoPlaylist';
import { Item } from '../../components/deezerMusic/Item/Item'

export class PlaylistContainers extends Component {
    state = { playlist_info: null }
    componentDidMount() {
        this.props.addToSongs() 
        this.props.playlistTrackList(this.props.history.location.pathname.split('/')[3])
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.songs !== undefined && prevProps !== this.props) {
            this.filter(this.props.songs)
        }
    }

    filter = data => {
        const id = this.props.history.location.pathname.split('/')[3];
        if (data) {
            data = data.playlists.data;
            for (let i = 0; i < data.length; i++ ) {
                if (data[i].id == id) {
                    this.setState({ playlist_info: data[i] })
                }
            }
        }
 
    }

    render() {
        const { playlist_now } = this.props;
        const { playlist_info } = this.state;

        return (
            <div className='playlist_containers'>
                <div className='catalog_header'>
                    {
                        playlist_info ? <InfoPlaylist info={playlist_info} length={playlist_now.length}/> : <Loading />
                    }
                </div>
                <div className='catalog_playlist'>
                {
                  Array.isArray(playlist_now)  ? playlist_now.map((el, index) => {
                    //   console.log(index)
                    return  <Item   
                                id={el.id} 
                                src={el.album.cover_small} 
                                artist={el.artist.name} 
                                title={el.title} 
                                preview={el.preview}
                                index={index+1}
                            />
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
