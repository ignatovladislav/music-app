import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { artistInfo } from '../../store/actions/musicActions'
import './ArtistContainers.css'

import { Loading } from '../../components/Loading/Loading';
import { InfoArtist } from '../../components/deezerMusic/Artist/InfoArtist';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { AddAlbum } from '../../components/AddAlbum/AddAlbum'

export class ArtistContainers extends Component {
    componentDidMount() {
        this.props.artistInfo(this.props.history.location.pathname.split('/')[3]);
    }

    render() {
        const { auth, artist_now, artist_now_top_50 } = this.props;
        
        if (!auth.uid) return <Redirect to='/' />
        return (
            <div className='artist_containers'>
                <div className='catalog_header_artist'>
                    {
                        artist_now ? <InfoArtist name={artist_now.name} img={artist_now.picture_medium} /> : <Loading />
                    }
                </div>   
                {
                    artist_now ? <AddAlbum/> : <Loading />
                }     
                {
                    artist_now_top_50 ? artist_now_top_50.data.map((el, index) => {
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
            </div>
        )
    }
}

const mapStateToProps = state => ({
    artist_now: state.music.artist_now_success,
    artist_now_top_50: state.music.artist_now_top_50,
    error: state.music.error,
    auth: state.firebase.auth,
})

const mapDispatchToProps = dispatch => {
    return {
        artistInfo: url => dispatch(artistInfo(url)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ArtistContainers)
