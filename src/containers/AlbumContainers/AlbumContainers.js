import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { albumTrackList } from '../../store/actions/musicActions'
import './AlbumContainers.css'

import { Loading } from '../../components/Loading/Loading';
import { InfoAlbum } from '../../components/deezerMusic/Album/InfoAlbum';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export class AlbumContainers extends Component {
    componentDidMount() {
        this.props.albumTrackList(this.props.history.location.pathname.split('/')[3]);
    }
    
    render() {
        const { album_now_success, auth } = this.props;

        if (!auth.uid) return <Redirect to='/' />
        return (
            <div className='album_containers'>
                <div className='catalog_header_album'>
                    {
                        album_now_success ? 
                            <InfoAlbum 
                                album={album_now_success.title} 
                                artist={album_now_success.artist.name}
                                length={album_now_success.nb_tracks}
                                label={album_now_success.label}
                                img={album_now_success.cover_medium}
                            /> : <Loading />
                    }
                </div>               
                { 
                    album_now_success ? album_now_success.tracks.data.map((el, index) => {
                        return (
                            <div className='item_album' id={el.id} key={el.id} >
                                <div className='index_item_album' >
                                    { index+1 }
                                </div>
                                <div className='index_item_album'>
                                    {el.title}
                                </div>
                                <div className='index_item_album plus_icon'>
                                    <FontAwesomeIcon icon={ faPlus } size='1x' />
                                </div>
                            </div>
                          )
                    }) : <Loading />
                }
            </div>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumContainers);