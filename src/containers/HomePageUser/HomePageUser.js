import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchToDos } from '../../store/actions/musicActions'
import './HomePageUser.css';

import { ContainerToMusic } from '../../components/deezerMusic/ContainerTopMusic/ContainerToMusic';

export class HomePageUser extends Component {
  componentDidMount = () => {
    this.props.fetchData("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart");
  }

  render() {
    return (
      <div className='main_container_chart'>
        <ContainerToMusic {...this.props}/>
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
    fetchData: url => dispatch(fetchToDos(url)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(HomePageUser);

