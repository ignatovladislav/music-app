import React, { Component } from 'react'

import { Loading } from '../../components/Loading/Loading'
import { connect } from "react-redux";
import * as types from "../../store/actionTypes";
import './Genre.css'

export class Genre extends Component {

  componentDidMount = () => {
    this.props.fetchGenreMusic()
  }

  render() {
    const { genreMusic } = this.props;
    return (
      <div className='genre_container'>
        <h2>Music</h2>
        <div className='genre_container_block'>
          {
            genreMusic && genreMusic !== undefined ? genreMusic.map(item => {
              return (
                <div className={`genre_item`} key={item.id} id={item.id}>
                  <h5>{item.name}</h5>
                </div>
              )
            })  : <Loading />
          }
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

const mapDispatchToProps =  dispatch => {
  return {
    fetchGenreMusic: () => dispatch({ type: types.ADD_SONGS_GENRE_MUSIC })
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Genre);