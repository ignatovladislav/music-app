import React from 'react'
import { Album } from './Album'; 
import { Artist } from './Artist'; 
import { Playlist } from './Playlist'; 


export const ContainerToMusic = props => {
    return (
        <div className='conteiner_top_music'>
            <Playlist {...props} />
            <Album  {...props}/>
            <Artist {...props} />
        </div>
    )
}