import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


export const AddAlbum = props => {
    return (
        <div className='add_all'>
            <FontAwesomeIcon className='add_all_icon' icon={ faPlus } size='1x' />
            Add all
        </div>
    )
}