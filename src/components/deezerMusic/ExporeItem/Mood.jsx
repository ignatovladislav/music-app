import React from 'react'

export const Mood = props =>  {
    const handleClick = e => {
        props.history.push(`/expore/${e.target.id}`)
    }
        return (
            <div className='explore_container_content'>
                <div id='chill' className='highlights_item explore_item blue' onClick={handleClick} >
                    Chill
                </div>
                <div id='workout' className='highlights_item explore_item red_ocean' onClick={handleClick}>
                    Workout
                </div>
                <div id='party' className='highlights_item explore_item shahabi' onClick={handleClick}>
                    Party
                </div>
                <div id='romance' className='highlights_item explore_item alihossein' onClick={handleClick}>
                    Romance
                </div>
          </div>
        )
} 