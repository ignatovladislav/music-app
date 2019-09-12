import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteAlbum } from '../../store/actions/userMusicActions'
import { withRouter, Link } from 'react-router-dom'

export class Container extends Component {
    render() {
        const { user_album, deleteAlbum } = this.props;
        return (
            <div className='profile_item_playlist'>
                {
                    user_album && user_album.length !== 0 ? user_album.map( el => {
                        return (                         
                                <div className="item_playlist" id={el.id} key={el.id}>
                                    <Link to={`/album/${el.id}`} className='item_playlist' key={el.id}>
                                        <div className='item_playlist_artist' id={el.id} >
                                            <img src={el.cover_medium} id={el.id} alt='exec' />
                                        </div>
                                        <div className='index_item_artist'>
                                            {el.title}
                                        </div>
                                    </Link>
                                    <div className='index_item_artist_delete' id={el.id} onClick={(e) => deleteAlbum(e.target.id)}>
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

const mapStateToProps = (state) => ({
    user_album: state.userMusic.user_album,
})

const mapDispatchToProps = dispatch => ({
    deleteAlbum: url => dispatch(deleteAlbum(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePlaylist)
