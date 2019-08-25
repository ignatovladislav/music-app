import React from 'react'
import './Socialnetwork.css'

export  const Socialnetwork = props =>{
    return (
        <div className='singup_socnetw'>
            <img src={props.img} className={props.class} alt={props.text}/>
            <h3>{props.text}</h3>
        </div>
    )
}
