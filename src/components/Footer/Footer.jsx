import React from 'react'
import './Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    return (
        <footer className='footer_container'>
            <div className='footer_container_ifraime'>
                <h5>By Ihnatov Vladyslav</h5>
            </div>
            <div className='social_network'>
                <a href='https://www.instagram.com/deezer/'>
                    <FontAwesomeIcon className='socnetw_img' icon={ faInstagram } size='2x' />
                </a>
                <a href="https://www.facebook.com/DeezerRU/?brand_redir=173259534981">
                    <FontAwesomeIcon className='socnetw_img' icon={ faFacebook } size='2x' />
                </a>
                <a href="https://www.youtube.com/deezer">
                    <FontAwesomeIcon className='socnetw_img' icon={ faYoutube } size='2x' />
                </a>
                
            </div>
        </footer>
    )
}