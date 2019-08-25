import React from 'react'
import './Error.css'

export const Error = props => {
    return (
        <div className='error_container'>
            {props.text}
        </div>
    )
} 