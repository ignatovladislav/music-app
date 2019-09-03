import React from 'react'


export const InfoPlaylist = props => {
    return (
        <div className='info_playlist'>
            <div className='info_playlist_img'>
                <img src={props.info.picture_medium} alt='capcha'/>
            </div>
            <div className='info_playlist_title'>
                {props.info.title}
                <p>{props.length} tracks</p>
            </div>
            
        </div>
    )
}