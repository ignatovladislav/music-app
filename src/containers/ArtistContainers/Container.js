import React, { Component } from 'react'

import { InfoArtist } from '../../components/deezerMusic/Artist/InfoArtist'
import play from '../../assets/play-button.png'

export default class Container extends Component {

    handleClick = e => {
        this.props.history.push(`/album/${e.target.id}`)
    }
    render() {
        const { artist_info_success, artist_tracklist_success, artist_album_success, playNow, addTrack } = this.props;
        return (
            <div className='artist_containers'>
             <div className='catalog_header_artist'>
                {
                    artist_info_success ? <InfoArtist name={artist_info_success.name} img={artist_info_success.picture_medium} /> : null
                }
            </div>   
            {
                artist_tracklist_success ? artist_tracklist_success.map((el, index) => {
                    return (
                        <div className="item_artist" id={el.id} key={el.id}>
                            <div className='index_item_artist' >
                                { index+1 }
                            </div>
                            <div className='index_item_artist' id={el.id} onClick={e => playNow(e.target.id)}>
                                <img src={play} id={el.id} alt='exec' />
                            </div>
                            <div className='index_item_artist plus_icon' id={el.id} onClick={e => addTrack(e.target.id)}>
                                +
                            </div>
                            <div className='index_item_artist'>
                                <img src={el.album.cover_small} alt='caphca'/>
                            </div>
                            <div className='index_item_artist'>
                                {el.title}
                            </div>

                        </div>
                    )
                }) : null
            } 
            <h3>Albums</h3>      
            <div className='albums_containers'>    
            {
                artist_album_success ? artist_album_success.map(el => {
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
                }) : null
            }
            </div> 
        </div>
        )
    }
}
