import React, { Component } from 'react'

import { Redirect } from 'react-router-dom'
import { connect } from "react-redux";
// import * as types from "../../store/actionTypes";
import './Explore.css'
import { CountryChart } from '../../components/deezerMusic/ExporeItem/CountryChart';
import { Mood } from '../../components/deezerMusic/ExporeItem/Mood';

export class Explore extends Component {

  // componentDidMount = () => {
  //   // this.props.fetchGenreMusic()
  // }

  // handleClick = e => {
  //   this.props.history.push(`/user/genre/${e.target.id}`)
  // }

  render() {
    const { auth } = this.props;

    if (!auth.uid) return <Redirect to='/' />
    return (
      <div className='explore_container'>
        <h2>All Channels</h2>
        <div className='explore_container_block highlights'>
          <h3>Mood</h3>
          <Mood />
          <h3 className='headline_explore'>Country top charts</h3>
          <CountryChart />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
      error: state.music.error,
      auth: state.firebase.auth,
      genreMusic: state.music.genreMusic,
    }
}

// const mapDispatchToProps =  dispatch => {
//   return {
//     fetchGenreMusic: () => dispatch({ type: types.ADD_SONGS_GENRE_MUSIC })
//   };
// };


export default connect(mapStateToProps, null)(Explore);