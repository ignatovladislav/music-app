import React from 'react'
import { Track } from '../Songs/Track';
import { Album } from '../Songs/Album'; 
import { Artist } from '../Songs/Artist'; 
import { Playlist } from '../Songs/Playlist'; 


export const ContainerToMusic = props => {
    const { songs, error } = props
    return (
        <div className='conteiner_top_music'>
            <Track tracks_top={songs.tracks} error={error} />
            <Album  albums_top={songs.albums} error={error} />
            <Artist artists_top={songs.artists} error={error} />
            <Playlist playlists_top={songs.playlists} error={error} />
        </div>
    )
}