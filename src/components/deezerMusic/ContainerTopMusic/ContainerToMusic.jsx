import React from 'react'
import Album from '../Songs/Album'; 
import { Artist } from '../Songs/Artist'; 
import { Playlist } from '../Songs/Playlist'; 


export const ContainerToMusic = props => {
    return (
        <div className='conteiner_top_music'>
            <Playlist {...props} />
            <Album  {...props}/>
            <Artist {...props} />
        </div>
    )
}