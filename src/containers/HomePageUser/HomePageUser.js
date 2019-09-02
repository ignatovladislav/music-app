import React, { Component } from 'react';
import { connect } from "react-redux";
// import { addToSongs } from "../../store/actionTypes";
import './HomePageUser.css';

import { ContainerToMusic } from '../../components/deezerMusic/ContainerTopMusic/ContainerToMusic';
import { Loading } from '../../components/Loading/Loading';
import {addToSongs} from '../../store/actions/musicActions'

export class HomePageUser extends Component {
  componentDidMount() {
    this.props.addToSongs()  
  }

  render() {
    const { songs } = this.props;
    return (
      <div className='main_container_chart'>
        {
          songs ? <ContainerToMusic {...this.props}/> : <Loading />
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
      songs: state.music.songs,
      error: state.music.error,
      auth: state.firebase.auth,
      genreMusic: state.music.genreMusic,
      track_now: state.music.track_now
    }
}



export default connect(mapStateToProps, {addToSongs})(HomePageUser);

