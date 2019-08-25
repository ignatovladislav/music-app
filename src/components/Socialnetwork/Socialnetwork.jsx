import React from 'react'
import './Socialnetwork.css'

export  const Socialnetwork = props => {
    const { googleLogin } = props

    return (
        <div className='singup_socnetw' onClick={googleLogin}>
            <img
                className='icon_google'
                src='https://img.icons8.com/color/48/000000/google-logo.png'
                alt='icon_google'
            />
            <h3>Google</h3>
        </div>
    )
}
