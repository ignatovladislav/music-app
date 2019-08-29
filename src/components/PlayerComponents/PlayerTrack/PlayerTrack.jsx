import React from 'react'
import './PlayerTrack.css'

export const PlayerTrack = props => {
    return (
        <div className='player_track'>
            <div className='track_heading'>
                <div className='track_title'>title</div>
                <div className='track_action'>Action</div>
            </div>
            <div className='track_seekbar'>
                <div className='counter_current'>00:00</div>
                <div className='slider_track'>
                    <div></div>
                    <input type='range' />
                </div>
                <div className='counter_current_max'>00:00</div>
            </div>
        </div>
    )
}