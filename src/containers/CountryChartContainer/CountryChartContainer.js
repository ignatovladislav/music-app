import React, { Component } from 'react'
import { connect } from 'react-redux'
import { playlistTrackList, trackNowInPlayer } from '../../store/actions/musicActions'
import { addTrack, addPlaylist, deletePlaylist } from '../../store/actions/userMusicActions'
import { withRouter } from 'react-router-dom'

import './CountryChartContainer.css'
import { Loading } from '../../components/Loading/Loading';
import Container from './Conteiner'

export class CountryChart extends Component {
    state = { state_button: false }
    componentDidMount() {
        if (this.contains(this.props.user_playlist, this.props.history.location.pathname.split('/')[2])) {
            this.setState({ state_button: true })
            this.props.playlistTrackList(this.props.history.location.pathname.split('/')[2])   
        } else {
            this.props.playlistTrackList(this.props.history.location.pathname.split('/')[2])   
        }
       
    }

    componentDidUpdate = (prevProps) => {
        if(prevProps.user_album !== this.props.user_album) {
            if(this.contains(this.props.user_album, this.props.playlist_info)) {
                this.setState({ add_album: true })
            }
        }
    }

    contains = (array, obj) => {
        return array.some(item => item.id === +obj)
    }

    addTrack = e => {   
        this.props.addTrack(e.target.id)
    }

    trackNow = e => {
        this.props.trackNowInPlayer(e.target.id)
    }

    addPlaylist = e => {
        this.props.addPlaylist(e.target.id)
        this.setState(prevState => ({ add_album: !prevState.add_album }))
    }

    deletePlaylist = e => {
        this.props.deletePlaylist(e.target.id)
        this.setState(prevState => ({ add_album: !prevState.add_album }))
    }

    render() {
        const { playlist_info, playlist_now, isFetching } = this.props;
        const { state_button } = this.state;
        return (
            <>
                {
                    !isFetching && playlist_now && playlist_info ?  <Container 
                                                        playlist_now={playlist_now} 
                                                        playlist_info={playlist_info} 
                                                        playNow={this.trackNow}
                                                        addTrack={this.addTrack}
                                                        addPlaylist={this.addPlaylist}
                                                        deletePlaylist={this.deletePlaylist}
                                                        state_button={state_button}
                                                    /> : <Loading />
                }
                
            </>
        )
    }
}

const CountryChartContainer = withRouter(CountryChart)

const mapStateToProps = state => ({
    isFetching: state.music.isFetching,
    playlist_now: state.music.playlist_now,
    playlist_info: state.music.playlist_info,
    user_playlist: state.userMusic.user_playlist
})

const mapDispatchToProps = dispatch => ({
    playlistTrackList: (creds) => dispatch(playlistTrackList(creds)),
    addTrack: url => dispatch(addTrack(url)),
    trackNowInPlayer: url => dispatch(trackNowInPlayer(url)),
    addPlaylist: url => dispatch(addPlaylist(url)),
    deletePlaylist: url => dispatch(deletePlaylist(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(CountryChartContainer)
