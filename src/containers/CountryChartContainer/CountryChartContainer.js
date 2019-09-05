import React, { Component } from 'react'
import { connect } from 'react-redux'
import { countryChartList } from '../../store/actions/musicActions'

import './CountryChartContainer.css'
import { Loading } from '../../components/Loading/Loading';
import { AddAlbum } from '../../components/AddAlbum/AddAlbum';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export class CountryChartContainer extends Component {
    state = { hidden: true }
    componentDidMount() {
        this.props.countryChartList(this.props.history.location.pathname.split('/')[2])
        setTimeout(() => {
            this.setState({hidden: false});
        }, 1000);
    }



    render() {
        const { country_list_success } = this.props;
        console.log(country_list_success)
        if(this.state.hidden) return <Loading />
        return (
            <div className='county_chart_container'>
                {
                    country_list_success ?     <div className='info_playlist'>
                        <div className='info_playlist_img'>
                            <img src={country_list_success.picture_medium} alt='capcha'/>
                        </div>
                        <div className='info_playlist_title'>
                            {country_list_success.title}
                            <p>{country_list_success.creator.name}</p>
                        </div>
                    </div> : <Loading />
                }
                {
                    country_list_success ? <AddAlbum /> : <Loading />
                }
                <div className='items_playlist'>
                {
                  
                    country_list_success ? country_list_success.tracks.data.map((el, index) => {
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


const mapStateToProps = state => {
    return {
      error: state.music.error,
      auth: state.firebase.auth,
      country_list_success: state.music.country_list_success,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        countryChartList: url => (dispatch(countryChartList(url)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryChartContainer)
