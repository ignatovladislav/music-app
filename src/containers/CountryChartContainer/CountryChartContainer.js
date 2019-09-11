import React, { Component } from 'react'
import { connect } from 'react-redux'
import { playlistTrackList, trackNowInPlayer } from '../../store/actions/musicActions'
import { addTrack, addPlaylist } from '../../store/actions/userMusicActions'
import { withRouter } from 'react-router-dom'

import './CountryChartContainer.css'
import { Loading } from '../../components/Loading/Loading';
import Container from './Conteiner'
// 

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus } from '@fortawesome/free-solid-svg-icons'

export class CountryChart extends Component {
    componentDidMount() {
        this.props.playlistTrackList(this.props.history.location.pathname.split('/')[2])
    }

    addTrack = e => {   
        this.props.addTrack(e.target.id)
    }

    trackNow = e => {
        this.props.trackNowInPlayer(e.target.id)
    }

    addPlaylist = e => {
        this.props.addPlaylist(e.target.id)
    }
    render() {
        const { playlist_info, playlist_now } = this.props;
        return (
            <>
                {
                    playlist_now && playlist_info ?  <Container 
                                                        playlist_now={playlist_now} 
                                                        playlist_info={playlist_info} 
                                                        playNow={this.trackNow}
                                                        addTrack={this.addTrack}
                                                        addPlaylist={this.addPlaylist}
                                                    /> : <Loading />
                }
                
            </>
        )
    }
}

const CountryChartContainer = withRouter(CountryChart)

const mapStateToProps = state => {
    return {
      playlist_now: state.music.playlist_now,
      playlist_info: state.music.playlist_info,
      user_track: state.userMusic.user_track
    }
}

const mapDispatchToProps = dispatch => {
    return {
        playlistTrackList: (creds) => dispatch(playlistTrackList(creds)),
        addTrack: url => dispatch(addTrack(url)),
        trackNowInPlayer: url => dispatch(trackNowInPlayer(url)),
        addPlaylist: url => dispatch(addPlaylist(url))
        // playlistTrackList: url => (dispatch(playlistTrackList(url))),
        // countryChartList: url => (dispatch(countryChartList(url)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryChartContainer)
