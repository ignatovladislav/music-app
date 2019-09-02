import React from 'react'
import Album from '../Songs/Album'; 
import { Artist } from '../Songs/Artist'; 
import { Playlist } from '../Songs/Playlist'; 


export const ContainerToMusic = props => {
    const { songs, error } = props
    console.log(props)
    return (
        <div className='conteiner_top_music'>
            {/* <Track tracks_top={songs.tracks} error={error} /> */}
            <Album  {...props}/>
            <Artist  artists_top={songs.artists} error={error} />
            <Playlist {...props} />
        </div>
    )
}