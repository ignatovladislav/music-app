import React from 'react'


export const Item = props => {
    // console.log(props)
    const { id, src, title, artist, index } = props;
    return (
        <div className='item' id={id}>
            <div>{index}</div>
            <div>
                <img src={src} alt={id} />
            </div>
            <div>{title}</div>
            <div>{artist}</div>
        </div>
    )
}