import React from 'react'
import Slider from "react-slick";
import { settings } from '../Slider/sliderSettings'

export const createTrackContainer = props => {
    return (
        <div className='tracks_top'>
            <h2>Popular tracks</h2>
            <Slider {...settings} >
                {
                    props.map(item => {
                        return (
                            <div className='track_top charts' key={item.id} >
                                <img src={item.artist.picture_medium} alt='picture_tracks'/>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.artist.name}</p>
                                </div>
                            </div>
                            
                        )
                    })  
                }
            </Slider>
        </div>
    )
}


export const createAlbumContainer = props => {
    return (
        <div className='albums_top'>
            <h2>Popular albums</h2>
            {/* <div className='contatiner_top_item'> */}
            <Slider {...settings} >
            {
                props.map(item => {
                    return (
                        <div className='album_top charts' key={item.id}>
                            <img src={item.cover_medium} alt='picture_album' />
                            <div className='description'>
                                <h3>{item.title}</h3>
                                <p>{item.artist.name}</p>
                            </div>
                        </div>
                    )
                })
            }
            </Slider>
            {/* </div> */}
        </div>
    )
}

export const createArtistContainer = props => {
    return (
        <div className='artists_top'>
            <h2>Popular artist</h2>
            {/* <div className='contatiner_top_item'> */}
            <Slider {...settings} >
                {
                    props.map(item => {
                        // console.log(item)
                        return (
                            <div className='artist_top charts' key={item.id}>
                                <img src={item.picture_medium} alt='picture_artist' />
                                <div className='description'>
                                    <h3>{item.name}</h3>
                                </div>
                            </div>
                        )
                    })
                }
                {/* </div> */}
            </Slider>
        </div>
    )
}

export const createPlaylistContainer = props => {
    return (
        <div className='playlists_top'>
            <h2>Popular playlists</h2>
            {/* <div className='contatiner_top_item'> */}
            <Slider {...settings}>
            {
                props.map(item => {
                    // console.log(item)
                    return (
                        <div className='playlist_top charts' key={item.id}>
                            <img src={item.picture_medium} alt='picture_playlist' />
                            <div className='description'>
                                <h3>{item.title}</h3>
                                <p>{item.user.name}</p>
                            </div>
                        </div>
                    )
                })
            }
            {/* </div> */}
            </Slider>
        </div>
    )
}