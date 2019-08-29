import React from 'react'
import './Songs.css'

import Slider from "react-slick"
import { settings } from '../../Slider/sliderSettings'
import { Loading } from '../../Loading/Loading'

export const Album = props => {
    const { albums_top } = props;

    return (
        <div className='albums_top'>
            <h2>Popular albums</h2>
            <Slider {...settings} >
                {
                    albums_top ? albums_top.data.map(item => {
                        return (
                            <div className='albums_top charts' key={item.id} id={item.id}>
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