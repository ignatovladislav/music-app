import React from 'react'
import './Songs.css'

import Slider from "react-slick"
import { settings } from '../../Slider/sliderSettings'
import { Loading } from '../../Loading/Loading'

export const Artist = props => {
    const { songs, history } = props
    const handleClick = e => {
        history.push(`/artist/${e.target.id}`)
    }
    return (
        <div className='artists_top'>
            <h2>Popular artist</h2>
            <Slider {...settings} >
                {
                    songs.artists ? songs.artists.data.map(item => {
                        return (
                            <div className='artists_top charts' key={item.id} id={item.id} onClick={handleClick}>
                                 <img src={item.picture_medium} alt='picture_tracks' id={item.id} onClick={handleClick}/>
                                <div id={item.id} onClick={handleClick}>
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