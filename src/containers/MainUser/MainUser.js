import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchToDos } from '../../store/actions/musicActions';
import './MainUser.css';

import Songs from '../../components/Songs/Songs';

export class MainUser extends Component {
  componentDidMount() {
    this.props.fetchData("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart");
  }
    
    render() {
        // console.log(this.props)
        const { songs, loading, error } = this.props;
        return (
            <div className='main_container_chart'>
                <h1>Hits</h1>
                <Songs tracks_top={songs.tracks} lazyload={loading} error={error} />
                <Songs albums_top={songs.albums} lazyload={loading} error={error} />
                <Songs artists_top={songs.artists} lazyload={loading} error={error} />
                <Songs playlist_top={songs.playlists} lazyload={loading} error={error} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
      songs: state.music.songs,
      loading: state.music.loading,
      error: state.music.error,
      auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (url) => dispatch(fetchToDos(url))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MainUser);

