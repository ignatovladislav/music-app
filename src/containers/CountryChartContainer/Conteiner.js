import React, { Component } from 'react'

import { InfoPlaylist } from '../../components/deezerMusic/Playlist/InfoPlaylist';
import AddAllPlaylist from '../../components/AddAllPlaylist/AddAllPlaylist';

import play from '../../assets/play-button.png'

export default class Container extends Component {
    render() {
        const { playlist_info, playlist_now, addPlaylist, playNow, addTrack } = this.props;
        console.log(this.props)
        return (
            <div className='playlist_containers'>
                <div className='catalog_header_playlist'>
                    {
                        playlist_info ? <InfoPlaylist info={playlist_info} length={playlist_now.length}/> : null
                    }
                </div>
                {
                    playlist_info ? <AddAllPlaylist id={playlist_info.id} addPlaylist={addPlaylist} /> : null
                }         
                <div className='catalog_playlist'>
                    {
                        Array.isArray(playlist_now)  ? playlist_now.map((el, index) => {
                            return (
                                <div className='item_playlist' id={el.id} key={el.id} >
                                    <div className='index_item_playlist' id={el.id} >
                                        { index+1 }
                                    </div>
                                    <div className='index_item_playlist' id={el.id} onClick={playNow}>
                                        <img src={play} alt='icon' id={el.id} />
                                    </div>
                                    <div className='index_item_playlist plus_icon' id={el.id} onClick={addTrack}>
                                        +
                                    </div>
                                    <div className='index_item_playlist'>
                                        <img src={el.album.cover_small} alt='exec' />
                                    </div>
                                    <div className='index_item_playlist'>{el.title}</div>
                                    <div className='index_item_playlist'>{el.artist.name}</div>
                                </div>
                            )
                        }) : null
                    }
                </div>  
            </div>
        )
    }
}
