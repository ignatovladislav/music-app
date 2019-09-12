import React from 'react'

export const DeleteAllAlbum = props => {
    const { id, deleteAlbum } = props;
    return (
        <div className='add_all' id={id} onClick={deleteAlbum}>
            - Delete all
        </div>
    )
}