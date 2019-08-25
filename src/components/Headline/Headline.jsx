import React from 'react'
import './Headline.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

export const Headline = () => {
    return (
            <Link to='/' className='headline-link'>
                <h1 className='headline'>Music Player</h1>
                <FontAwesomeIcon 
                    id='icon'
                    icon={ faCompactDisc } 
                    size='2x'
                />
            </Link>
    )
}