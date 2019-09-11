import React, { Component } from 'react'
import { connect } from 'react-redux'
import { trackNowInPlayer } from '../../store/actions/musicActions'
import { withRouter, Link } from 'react-router-dom'

export class Container extends Component {
    render() {
        const { user_playlist } = this.props;
        console.log(this.props)
        return (
            <div className='profile_item_playlist'>
                {
                    user_playlist && user_playlist.length !== 0 ? user_playlist.map( el => {
                        return (
                            <Link to={`/playlist/${el.id}`} className='item_playlist'>
                                <div className="item_playlist" id={el.id} key={el.id}>
                                    <div className='item_playlist_artist' id={el.id} >
                                        <img src={el.picture_medium} id={el.id} alt='exec' />
                                    </div>
                                    <div className='index_item_artist'>
                                        {el.title}
                                    </div>
                                </div>
                            </Link>
                        )
                    }) : null 
                }
            </div>
        )
    }
}

const ProfilePlaylist = withRouter(Container);

const mapStateToProps = (state) => ({
    user_playlist: state.userMusic.user_playlist
})

const mapDispatchToProps = dispatch => {
    return {
        trackNowInPlayer: url => dispatch(trackNowInPlayer(url))
    }
}

export default connect(mapStateToProps, null)(ProfilePlaylist)
