import React from 'react'
import { Link } from 'react-router-dom'

export const Mood = () => {
    return (
        <div className='explore_container_content'>
            <Link to={`/user/expore/chill`}>
                <div id='chil' className='highlights_item explore_item blue'>Chill</div>
            </Link>

            <div className='highlights_item explore_item red_ocean'>
            Workout
            </div>
            <div className='highlights_item explore_item shahabi'>
            Party
            </div>
            <div className='highlights_item explore_item alihossein'>
            Romance
            </div>
      </div>
    )
}