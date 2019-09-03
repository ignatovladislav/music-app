import React from 'react'

export const InfoAlbum = props => {
    return (
        <div className='info_album'>
            <div className='info_album_img'>
                <img src={props.img} alt='capcha'/>
            </div>
            <div className='info_album_title'>
                {props.album}
                <p>{props.artist}</p>
                <p>{props.label}</p>
                <p>{props.length} tracks</p>
            </div>
        </div>
    )
}
