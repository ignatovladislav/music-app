import React from 'react'
import './Songs.css'

import Slider from "react-slick"
import { settings } from '../../Slider/sliderSettings'
import { Loading } from '../../Loading/Loading'
import { connect } from "react-redux"

const Album = props => {
    const { songs } = props;
    const handleClick = (e) => {
        props.history.push(`album/${e.target.id}`)
    }
    console.log(songs.albums)
    return (
        <div className='albums_top'>
            <h2>Popular albums</h2>
            <Slider {...settings} >
                {
                    songs.albums ? songs.albums.data.map(item => {
                        return (
                            <div className='albums_top charts' key={item.id} id={item.id} onClick={handleClick}>
                                <img src={item.cover_medium} alt='picture_tracks' id={item.id} />
                                <div id={item.id}>
                                    <h3 id={item.id}>{item.title}</h3>
                                    <p id={item.id}>{item.artist.name}</p>
                                </div>
                            </div>
                            
                        )
                    }) : <Loading />
                }
            </Slider>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      songs: state.music.songs,
      error: state.music.error,
      auth: state.firebase.auth,
      track_now: state.music.track_now
    }
}



export default connect(mapStateToProps, null)(Album);