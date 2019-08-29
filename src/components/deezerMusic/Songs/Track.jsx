import React from 'react'
import './Songs.css'

import Slider from "react-slick"
import { settings } from '../../Slider/sliderSettings'
import { Loading } from '../../Loading/Loading'

export const Track = props => {
    const { tracks_top } = props

    return (
        <div className='tracks_top'>
            <h2>Popular tracks</h2>
            <Slider {...settings} >
                {
                    tracks_top ? tracks_top.data.map(item => {
                        return (
                            <div className='track_top charts' key={item.id} id={item.id}>
                                <img src={item.artist.picture_medium} alt='picture_tracks'/>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.artist.name}</p>
                                </div>
                            </div>
                            
                        )
                    }) : <Loading />
                }
            </Slider>
        </div>
    )
}