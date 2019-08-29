import React from 'react'
import './Songs.css'

import Slider from "react-slick"
import { settings } from '../../Slider/sliderSettings'
import { Loading } from '../../Loading/Loading'

export const Artist = props => {
    const { artists_top } = props

    return (
        <div className='artists_top'>
            <h2>Popular artist</h2>
            <Slider {...settings} >
                {
                    artists_top ? artists_top.data.map(item => {
                        return (
                            <div className='artists_top charts' key={item.id} id={item.id}>
                                 <img src={item.picture_medium} alt='picture_tracks'/>
                                <div>
                                    <h3>{item.name}</h3>
                                </div>
                            </div>
                            
                        )
                    }) : <Loading />
                }
            </Slider>
        </div>
    )
}