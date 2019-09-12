import React from 'react'

export const AddAllAlbum = props => {
    const { id, addAlbum } = props;
    return (
        <div className='add_all' id={id} onClick={addAlbum}>
            + Add all
        </div>
    )
}