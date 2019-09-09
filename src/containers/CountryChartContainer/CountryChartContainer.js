import React, { Component } from 'react'
import { connect } from 'react-redux'
import { countryChartList, playlistTrackList } from '../../store/actions/musicActions'
import { withRouter } from 'react-router-dom'

import './CountryChartContainer.css'
import { Loading } from '../../components/Loading/Loading';
import { AddAlbum } from '../../components/AddAlbum/AddAlbum';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export class Container extends Component {
    componentDidMount() {
        this.props.playlistTrackList(this.props.history.location.pathname.split('/')[2])
    }
    render() {
        const { playlist_info, playlist_now } = this.props;
        return (
            <div className='county_chart_container'>
                {
                    playlist_info ?     <div className='info_playlist'>
                        <div className='info_playlist_img'>
                            <img src={playlist_info.picture_medium} alt='capcha'/>
                        </div>
                        <div className='info_playlist_title'>
                            {playlist_info.title}
                            <p>{playlist_info.creator.name}</p>
                        </div>
                    </div> : <Loading />
                }
                {
                    playlist_now ? <AddAlbum /> : <Loading />
                }
                <div className='items_playlist'>
                {
                  
                    Array.isArray(playlist_now) ? playlist_now.map((el, index) => {
                        return (
                            <div className='item_playlist_country' id={el.id} key={el.id}>
                                <div className='index_item_playlist_country'>
                                    {index + 1}
                                </div>
                                <div className='index_item_playlist_country plus_icon'>
                                    <FontAwesomeIcon icon={ faPlus } size='1x' />
                                </div>
                                <div className='index_item_playlist_country'>
                                    <img src={el.album.cover_small} alt='exec' />
                                </div>
                                <div className='index_item_playlist_country'>
                                    {el.title}
                                </div>
                                <div className='index_item_playlist_country'>
                                    {el.artist.name}
                                </div>
                            </div>
                        )
                    }) : <Loading />

                }     
                </div>    
            </div>
        )
    }
}

const CountryChartContainer = withRouter(Container)

const mapStateToProps = state => {
    return {
      error: state.music.error,
      auth: state.firebase.auth,
      playlist_now: state.music.playlist_now,
      playlist_info: state.music.playlist_info,
    //   country_list_success: state.music.country_list_success,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        playlistTrackList: url => (dispatch(playlistTrackList(url))),
        countryChartList: url => (dispatch(countryChartList(url)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryChartContainer)
