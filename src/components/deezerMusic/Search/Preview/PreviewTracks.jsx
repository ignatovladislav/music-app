import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import play from '../../../../assets/play-button.png'

export default class PreviewTracks extends Component {
    render() {
        const { preview_tracks, history, playNow, addTrack } = this.props;
        const location = history.location.pathname.split('/')[2];
        
        return (
            <div className='search_container_item'>
            <Link to={`${location}/tracks`}><h3>Tracks ></h3></Link>
            {
                preview_tracks ? preview_tracks.slice(0, 5).map((el, index) => {
                    return (
                        <div className='search_container_index' key={el.id} id={el.id}>
                            <div className='search_container_index_item' >
                                { index + 1 }
                            </div>
                            <div className='search_container_index_item' id={el.id} onClick={playNow}>
                                <img src={play} id={el.id} alt='exec' />
                            </div>
                            <div className='search_container_index_item plus_icon' id={el.id} onClick={addTrack} >
                                +
                            </div>
                            <div className='search_container_index_item' id={el.id} >
                                <img id={el.id} src={el.album.cover_small} alt='exec' />
                            </div>
                            <div className='search_container_index_item'>
                                {el.title}
                            </div>
                            <div className='search_container_index_item'>
                                {el.album.title}
                            </div>
                        </div>
                    )
                }) : null
            }
        </div> 
        )
    }
}