import React, { Component } from 'react'
import { InfoAlbum } from '../../components/deezerMusic/Album/InfoAlbum';

import { AddAllAlbum } from '../../components/AddAllAlbum/AddAllAlbum'

import play from '../../assets/play-button.png'

export default class Container extends Component {
    render() {
        const { album_now_success, playNow, addTrack } = this.props;
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
                            /> : null
                    }
                </div>     
                {
                    album_now_success ? <AddAllAlbum /> : null
                }           
                { 
                    album_now_success ? album_now_success.tracks.data.map((el, index) => {
                        return (
                            <div className='item_album' id={el.id} key={el.id} >
                                <div className='index_item_album' >
                                    { index+1 }
                                </div>
                                <div className='index_item_album' id={el.id} onClick={playNow}>
                                    <img src={play} id={el.id} alt='exec' />
                                </div>
                                <div className='index_item_album plus_icon' id={el.id} onClick={addTrack}>
                                    +
                                </div>
                                <div className='index_item_album'>
                                    {el.title}
                                </div>
                            </div>
                          )
                    }) : null
                }
            </div>
        )
    }
}

