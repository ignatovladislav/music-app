import React, { Component } from 'react'
import './HomeMain.css'
import Slider from "react-slick";
import { settingsHome } from '../Slider/sliderSettings'

import slidePicture1 from '../../assets/1.jpg'
import slidePicture2 from '../../assets/2.jpg'
import slidePicture3 from '../../assets/3.jpg'
import slidePicture4 from '../../assets/4.jpg'
import slidePicture5 from '../../assets/5.jpg'

export default class HomeMain extends Component {
    render() {
        return (
            <div className='home_container'>
                <div>
                    <h1>You bring the passion. We bring the music.</h1>
                </div>
                <div>
                    <Slider {...settingsHome}>
                        <div>
                            <img className='picture_slide' src={slidePicture1} alt='slider' />
                        </div>
                        <div>
                            <img className='picture_slide' src={slidePicture2} alt='slider' />
                        </div>
                        <div>
                            <img className='picture_slide' src={slidePicture3} alt='slider' />
                        </div>
                        <div>
                            <img className='picture_slide' src={slidePicture4} alt='slider' />
                        </div>
                        <div>
                            <img className='picture_slide' src={slidePicture5} alt='slider' />
                        </div>
                    </Slider>
                </div>

            </div>
        )
    }
}
