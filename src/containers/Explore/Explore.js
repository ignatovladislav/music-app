import React, { Component } from 'react'
import './Explore.css'

import { CountryChart } from '../../components/deezerMusic/ExporeItem/CountryChart';

export default class Explore extends Component {
  render() {
    return (
      <div className='explore_container'>
        <h2>All Channels</h2>
        <div className='explore_container_block highlights'>
          <h3 className='headline_explore'>Country top charts</h3>
          <CountryChart {...this.props}/>
        </div>
      </div>
    )
  }
}