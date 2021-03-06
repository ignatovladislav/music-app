import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePlaylist } from '../../store/actions/userMusicActions'
import { withRouter, Link } from 'react-router-dom'

export class Container extends Component {
    render() {
        const { user_playlist, deletePlaylist } = this.props;
        return (
            <div className='profile_item_playlist'>
                {
                    user_playlist && user_playlist.length !== 0 ? user_playlist.map( el => {
                        return (
                                <div className="item_playlist" id={el.id} key={el.id}>
                                    <Link to={`/playlist/${el.id}`} className='item_playlist' key={el.id}>
                                        <div className='item_playlist_artist' id={el.id} >
                                            <img src={el.picture_medium} id={el.id} alt='exec' />
                                        </div>
                                        <div className='index_item_artist'>
                                            {el.title}
                                        </div>
                                    </Link>
                                    <div className='index_item_artist_delete' id={el.id} onClick={(e) => deletePlaylist(e.target.id)}>
                                        -
                                    </div>
                                </div>
                        )
                    }) : null 
                }
            </div>
        )
    }
}

const ProfilePlaylist = withRouter(Container);

const mapStateToProps = state => ({
    user_playlist: state.userMusic.user_playlist
})

const mapDispatchToProps = dispatch => ({
    deletePlaylist: url => dispatch(deletePlaylist(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePlaylist)
