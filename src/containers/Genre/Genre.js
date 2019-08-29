import React, { Component } from 'react'

import { Loading } from '../../components/Loading/Loading'
import { connect } from "react-redux";
import { fetchGenreMusic } from '../../store/actions/musicActions'
import './Genre.css'

export class Genre extends Component {

  componentDidMount = () => {
    this.props.fetchGenreMusic("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre");
  }

  render() {
   
    const { genreMusic } = this.props;
    console.log(genreMusic  )
    return (
      <div className='genre_container'>
        <h2>Music</h2>
        <div className='genre_container_block'>
          {
              genreMusic.data ? genreMusic.data.map(item => {
                return (
                  <div className={`genre_item ${item.className}`} key={item.id} id={item.id}>
                    <h5>{item.name}</h5>
                  </div>
                )
              }) : <Loading />
          }
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
    return {
      songs: state.music.songs,
      loading: state.music.loading,
      error: state.music.error,
      auth: state.firebase.auth,
      genreMusic: state.music.genreMusic,
    }
}

const mapDispatchToProps =  dispatch => {
  return {
    fetchGenreMusic: url => dispatch(fetchGenreMusic(url)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Genre);