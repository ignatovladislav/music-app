import React from 'react'
import './PlayerTrack.css'
import AudioPlayer from "react-h5-audio-player";

export const PlayerTrack = props => {
    const { src, title, artist } = props;
    const title_art = title ? {display: 'block'} : {display: 'none'}
    return (
        
        <div className='player_track'>
            <div className='track_heading'>
                <div className='track_title title'>{title}</div>
                <div className='track_title dash' style={title_art}>—</div>
                <div className='track_title artist'>{artist}</div>                  
            </div>
            <AudioPlayer className='audioPlayer' src={src} />
        </div>
    )
}