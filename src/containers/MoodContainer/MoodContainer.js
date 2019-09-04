import React, { Component } from 'react'
import { connect } from 'react-redux'

import './MoodContainer.css'

export class MoodContainer extends Component {
    render() {
        return (
            <div className='mood_container'>
                MoodContainer
                MoodContainer
                MoodContainer
                MoodContainer
                <div>asd</div>
                <div>asd</div>
                <div>asd</div>
                <div>asd</div>
                <div>asd</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MoodContainer)
