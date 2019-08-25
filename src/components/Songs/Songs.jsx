import React, { Component } from 'react'
import './Songs.css'
import { Loading } from '../Loading/Loading'
import { createTrackContainer, createAlbumContainer, createArtistContainer, createPlaylistContainer } from './create'

export default class Songs extends Component {
    render() {
        const { tracks_top, albums_top, artists_top, playlist_top } = this.props;
        return (
            <div className='conteiner_top_music'>
                {
                    tracks_top ? createTrackContainer(tracks_top.data) :
                    albums_top ? createAlbumContainer(albums_top.data) : 
                    artists_top ? createArtistContainer(artists_top.data) : 
                    playlist_top ? createPlaylistContainer(playlist_top.data) : (<Loading />)
                }
            </div>
        )
    }
}