import React from 'react'

import play from '../../assets/play-button.png'

export const PreviewTracks = props => {
    const { preview_tracks, playNow } = props;
    return (
        <div className='search_container_item'>
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
