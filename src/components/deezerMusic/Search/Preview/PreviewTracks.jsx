import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export const PreviewTracks = props => {
    const { preview_tracks } = props;
    return (
        <div className='search_container_item'>
            <h3>Tracks ></h3>
            {
                preview_tracks ? preview_tracks.slice(0, 5).map((el, index) => {
                    return (
                        <div className='search_container_index' key={el.id} id={el.id}>
                            <div className='search_container_index_item' >
                                { index + 1 }
                            </div>
                            <div className='search_container_index_item plus_icon'>
                                <FontAwesomeIcon icon={ faPlus } size='1x' />
                            </div>
                            <div className='search_container_index_item'>
                                <img src={el.album.cover_small} alt='exec' />
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