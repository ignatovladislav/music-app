import React from 'react'

export const InfoArtist = props => {
    return (
        <div className='info_artist'>
             <div className='info_artist_img'>
                <img src={props.img} alt='capcha'/>
            </div>
            <div className='info_artist_title'>{props.name}</div>
        </div>
    )
}
