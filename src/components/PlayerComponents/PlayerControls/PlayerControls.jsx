import React from 'react'
import './PlayerControls.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'

export const PlayerControls = props => {
    // console.log(props)
    return (
        <div className='player_controls'>
            <div className='player_controls_icon previous_songs' >
                <FontAwesomeIcon id='previous_songs' icon={ faChevronCircleLeft } size='2x' onClick={props.handleClick}/>
            </div>
            <div className='player_controls_icon next_songs'>
                <FontAwesomeIcon id='next_songs' icon={ faChevronCircleRight } size='2x'  onClick={props.handleClick} />
            </div>
        </div>
    )
}