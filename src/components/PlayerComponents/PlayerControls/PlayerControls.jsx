import React from 'react'
import './PlayerControls.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'

export const PlayerControls = props => {
    return (
        <div className='player_controls'>
            <div className='player_controls_icon previous_songs'>
                <FontAwesomeIcon icon={ faChevronCircleLeft } size='2x' />
            </div>
            <div className='player_controls_icon play_songs'>
                <FontAwesomeIcon icon={ faPlay } size='2x'  />
            </div>
            <div className='player_controls_icon  next_songs'>
                <FontAwesomeIcon icon={ faChevronCircleRight } size='2x'  />
            </div>
        </div>
    )
}