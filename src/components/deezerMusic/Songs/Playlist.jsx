import React from 'react'
import './Songs.css'

import Slider from "react-slick"
import { settings } from '../../Slider/sliderSettings'
import { Loading } from '../../Loading/Loading'

export const Playlist = props => {
    const { playlists_top } = props
    return (
        <div className='playlists_top'>
            <h2>Popular playlist</h2>
            <Slider {...settings} >
                {
                    playlists_top ? playlists_top.data.map(item => {
                        return (
                            <div className='playlists_top charts' key={item.id} id={item.id}>
                                 <img src={item.picture_medium} alt='picture_tracks'/>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.name}</p>
                                </div>
                            </div>
                            
                        )
                    }) : <Loading />
                }
            </Slider>
        </div>
    )
}