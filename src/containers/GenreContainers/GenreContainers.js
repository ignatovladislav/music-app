import React, { Component } from 'react'
import { connect } from 'react-redux'

export default  class GenreContainers extends Component {
    render() {
        console.log(this.props)
        return (
            <div className='genre_containers'>genre_containers</div>
        )
    }
}
