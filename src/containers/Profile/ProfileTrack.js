import React, { Component } from 'react'
import { connect } from 'react-redux'
import { trackNowInPlayer } from '../../store/actions/musicActions'
import { deleteTrack } from '../../store/actions/userMusicActions'
import { withRouter } from 'react-router-dom'

import play from '../../assets/play-button.png'

export class Container extends Component {    
    render() {
        const { user_track, trackNowInPlayer, deleteTrack } = this.props;
        return (
            <div className='profile_item'>
                {
                    user_track && user_track.length !== 0 ? user_track.map((el, index) => {
                        return (
                            <div className="item_artist" id={el.id} key={el.id}>
                                <div className='index_item_artist' >
                                    { index+1 }
                                </div>
                                <div className='index_item_artist' id={el.id} >
                                    <img src={play} id={el.id} alt='exec' onClick={(e) => trackNowInPlayer(e.target.id)}/>
                                </div>
                                <div className='index_item_playlist plus_icon' id={el.id} onClick={(e) => deleteTrack(e.target.id)}>
                                    -
                                </div>
                                <div className='index_item_artist'>
                                    <img src={el.album.cover_small} alt='caphca'/>
                                </div>
                                <div className='index_item_artist'>
                                    {el.title}
                                </div>
    
                            </div>
                        )
                    }) : null 
                }
            </div>
        )
    }
}

const ProfileTrack = withRouter(Container);

const mapStateToProps = state => ({
    user_track: state.userMusic.user_track
})

const mapDispatchToProps = dispatch => ({
    trackNowInPlayer: url => dispatch(trackNowInPlayer(url)),
    deleteTrack: url => dispatch(deleteTrack(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileTrack)
