import React from 'react'
import './Songs.css'

import Slider from "react-slick"
import { settings } from '../../Slider/sliderSettings'
import { Loading } from '../../Loading/Loading'

export const Playlist = props => {

    const handleClick = (e) => {
        props.history.push(`/playlist/${e.target.id}`)
    }
    const { songs } = props
    return (
        <div className='playlists_top'>
            <h2>Popular playlist</h2>
            <Slider {...settings} >
                {
                    songs.playlists ? songs.playlists.data.map(item => {
                        return (
                            <div className='playlists_top charts' key={item.id} id={item.id} onClick={handleClick}>
                                <img src={item.picture_medium} alt='picture_tracks' id={item.id} onClick={handleClick}/>
                                <div id={item.id} >
                                    <h3 id={item.id} >{item.title}</h3>
                                    <p id={item.id} >{item.name}</p>
                                </div>
                            </div>
                                
                        )
                    }) : <Loading />
                }
            </Slider>
        </div>
    )
}