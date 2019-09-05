import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux";
import './Explore.css'

import { CountryChart } from '../../components/deezerMusic/ExporeItem/CountryChart';

export class Explore extends Component {
  render() {
    const { auth } = this.props;

    if (!auth.uid) return <Redirect to='/' />
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

const mapStateToProps = state => {
    return {
      error: state.music.error,
      auth: state.firebase.auth,
    }
}

export default connect(mapStateToProps, null)(Explore);