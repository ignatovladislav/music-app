import React, { Component } from 'react'
import './Player.css'

import { PlayerControls } from '../../components/PlayerComponents/PlayerControls/PlayerControls'
import { PlayerTrack } from '../../components/PlayerComponents//PlayerTrack/PlayerTrack'
import { PlayerOptions } from '../../components/PlayerComponents/PlayerOptions/PlayerOptions'

export default class Player extends Component {
    render() {
        return (
            <div className='player_container'>
                <PlayerControls />
                <PlayerTrack />
                <PlayerOptions />
            </div>
        )
    }
}

