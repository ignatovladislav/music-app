import React, { Component } from 'react';
import { connect } from "react-redux";
import './HomePageUser.css';

import { ContainerToMusic } from '../../components/ForHomePage/ContainerToMusic';
import { Loading } from '../../components/Loading/Loading';
import { addToSongs } from '../../store/actions/musicActions'

export class HomePageUser extends Component {
  componentDidMount() {
    this.props.addToSongs()  
  }

  render() {
    const { isFetching } = this.props;
    return (
      <div className='main_container_chart'>
        {
          !isFetching ? <ContainerToMusic {...this.props}/> : <Loading />
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isFetching: state.music.isFetching,
  songs: state.music.songs,
  error: state.music.error,
  track_now: state.music.track_now
})



export default connect(mapStateToProps, { addToSongs })(HomePageUser);

