import React, { Component } from 'react'
import './Sidebar.css'

export class Sidebar extends Component {
    render() {
        return (
            <div className='sidebar_container'>
                <div className='sidebar_context'>
                    <div className='sidebar_item'>
                        <span className='active_link'>Home</span>
                    </div>
                    <div className='sidebar_item'>
                        <span>Explore</span>
                    </div>
                    <div className='sidebar_item'>
                        <span>My Music</span>
                    </div>
                </div>
              
            </div>
        )
    }
}
