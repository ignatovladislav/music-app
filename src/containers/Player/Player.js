import React, { Component } from 'react'
import './Player.css'

import { PlayerControls } from '../../components/PlayerComponents/PlayerControls/PlayerControls'
import { PlayerTrack } from '../../components/PlayerComponents//PlayerTrack/PlayerTrack'
import { connect } from "react-redux";

class Player extends Component {
    state = { track_now: null, index_track: null, next_track: null }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.track_now !== this.props.track_now) {
            this.filter(this.props.songs.tracks)
        } 
    }

    // filter = data => {
    //     data = data.data
    //     for (let i = 0; i < data.length; i++ ) {
    //         if (data[i].id === this.props.track_now) {
    //             console.log(i)
    //             this.getNextTrack(data[i], data)
    //         }
    //     }
    // }


    // getNextTrack = (trackNow, data) => {
    //     for (let i = 0; i < data.length; i++ ) {
    //         if (data[i].id === trackNow.id) {
    //             this.getNextTrackP(i, trackNow, data)
    //         }
    //     }
    // }   
    // getNextTrackP = (num, trackNow, data) => {
    //     let next = num + 1
    //     if (num === 9) {
    //         next = 0
    //         this.setState({ index_track : num, track_now: trackNow, next_track: data[next] })
    //     } else {
    //         this.setState({ index_track : num, track_now: trackNow, next_track: data[next] })
    //     }
    // }



    // handleClick = e => {
    //     if(e.target.id === 'next_songs') {
    //         this.setState({ track_now: this.state.next_track })
    //     }
    // }
  
    render() {
        const { track_now_success } = this.props;
        
        return (
            <div className='player_container'>
                <PlayerControls handleClick={this.handleClick} />
                {
                    track_now_success ?
                        <PlayerTrack src={track_now_success.preview} 
                            title={track_now_success.title}  artist={track_now_success.artist.name}/> :
                        <PlayerTrack /> 
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    songs: state.music.songs,
    track_now_success: state.music.track_now_success
})

export default connect(mapStateToProps, null)(Player);