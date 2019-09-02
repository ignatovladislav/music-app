import React, { Component } from 'react'
import './Songs.css'

import Slider from "react-slick"
import { settings } from '../../Slider/sliderSettings'
import { Loading } from '../../Loading/Loading'
import { connect } from "react-redux";
import * as actions from '../../../store/actions/musicActions'
import * as types from '../../../store/actionTypes'


class Track extends Component {
    render(){
        const { tracks_top, clickSongsAct } = this.props;
        // console.log(this.props)
        return (
            <div className='tracks_top'>
                <h2>Popular tracks</h2>
                <Slider {...settings} >
                    {
                        tracks_top ? tracks_top.data.map(item => {
                            return (
                                <div className='track_top charts' key={item.id} id={item.id} onClick={e => clickSongsAct(e.target.id)}>
                                    <img src={item.artist.picture_medium} alt='picture_tracks' id={item.id}/>
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
}


const mapStateToProps = state => {
    return {
        songs: state.music.songs,
        track_now: state.music.track_now
    }
}

const mapDispatchToProps = dispatch => {
  return {
    // clickSongsAct: (payload) => dispatch({ type: types.CLICK_SONGS, payload }),
    clickSongsAct: id => dispatch(actions.clickSongsAct(id)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Track);