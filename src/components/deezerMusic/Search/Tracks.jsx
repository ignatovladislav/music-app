import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export const Track = props => {
    const { track } = props;
    return (
        <div className='search_container_item track'>
            <h3>Tracks</h3>
            {
                track ? track.map( (el, index) => {
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