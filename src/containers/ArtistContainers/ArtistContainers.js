import React, { Component } from 'react'
import { connect } from 'react-redux'
import { artistInfo } from '../../store/actions/musicActions'
import './ArtistContainers.css'

import { Loading } from '../../components/Loading/Loading';
import { InfoArtist } from '../../components/deezerMusic/Artist/InfoArtist';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { AddAlbum } from '../../components/AddAlbum/AddAlbum'

export class ArtistContainers extends Component {
    componentDidMount() {
        this.props.artistInfo(this.props.history.location.pathname.split('/')[2]);
    }

    handleClick = e => {
        this.props.history.push(`/album/${e.target.id}`)
    }

    render() {
        const { artist_info_success, artist_tracklist_success, artist_album_success  } = this.props;
        return (
            <div className='artist_containers'>
                <div className='catalog_header_artist'>
                    {
                        artist_info_success ? <InfoArtist name={artist_info_success.name} img={artist_info_success.picture_medium} /> : <Loading />
                    }
                </div>   
                {
                    artist_tracklist_success ? <AddAlbum/> : <Loading />
                }     
                {
                    artist_tracklist_success ? artist_tracklist_success.map((el, index) => {
                        return (
                            <div className="item_artist" id={el.id} key={el.id}>
                                <div className='index_item_artist' >
                                    { index+1 }
                                </div>
                                <div className='index_item_artist plus_icon'>
                                    <FontAwesomeIcon icon={ faPlus } size='1x' />
                                </div> 
                                <div className='index_item_artist'>
                                    <img src={el.album.cover_small} alt='caphca'/>
                                </div>
                                <div className='index_item_artist'>
                                    {el.title}
                                </div>

                            </div>
                        )
                    }) : <Loading />
                } 
                <h3>Albums</h3>      
                <div className='test'>    
                {
                    artist_album_success ? artist_album_success.map(el => {
                        console.log(el)
                        return (
                            <div id={el.id} className='item_artist_album' key={el.id} onClick={this.handleClick}>
                                <div id={el.id} className='index_item_artist'>
                                    <img id={el.id} src={el.cover_medium} alt='caphca'/>
                                </div>
                                <div id={el.id} className='index_item_artist'>
                                    {el.title}
                                </div> 

                            </div>
                        ) 
                    }) : <Loading />
                }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    artist_info_success: state.music.artist_info_success,
    artist_tracklist_success: state.music.artist_tracklist_success,
    artist_album_success: state.music.artist_album_success,
    error: state.music.error,
    auth: state.firebase.auth,
})

const mapDispatchToProps = dispatch => {
    return {
        artistInfo: url => dispatch(artistInfo(url)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ArtistContainers)
