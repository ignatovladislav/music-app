import React from 'react'
import './SignedOutLinks.css'

import { Link } from 'react-router-dom'

export const SignedOutLinks = () => {
    return (
        <div className='login_and_registration_container'>
            <Link to='/login' className='login_container logsing'>Log In</Link>
            <Link to='/register' className='singup_container logsing'>Sign up</Link>
        </div>
    )
}

