import React, { Component } from 'react'
import { connect } from 'react-redux'
import { trackNowInPlayer } from '../../store/actions/musicActions'
import { deleteTrack, deletePlaylist, deleteAlbum } from '../../store/actions/userMusicActions'
import { withRouter, Link } from 'react-router-dom'


import play from '../../assets/play-button.png'

export class Container extends Component {
    render() {
        const { match, user_track, user_playlist, user_album, trackNowInPlayer, deleteTrack, deletePlaylist, deleteAlbum } = this.props;
        return (
            <div className='profile_item_highlights'>
                {
                    user_track && user_track.length !== 0 ? <Link to={`${match.url}/tracks`} ><h2>Tracks > </h2></Link> : null
                }
                {
                    user_track && user_track.length !== 0 ? user_track.slice(0, 5).map((el, index ) => {
                        return (
                            <div className='preview_container_track' key={el.id} id={el.id}>
                                <div className='preview_container_track_item' >
                                    { index + 1 }
                                </div>
                                <div className='preview_container_track_item' id={el.id} onClick={e => trackNowInPlayer(e.target.id)}>
                                    <img src={play} id={el.id} alt='exec' />
                                </div>
                                <div className='preview_container_track_item' id={el.id} onClick={(e) => deleteTrack(e.target.id)}>
                                    -
                                </div>
                                <div className='preview_container_track_item' id={el.id} >
                                    <img id={el.id} src={el.album.cover_small} alt='exec' />
                                </div>
                                <div className='preview_container_track_item'>
                                    {el.title}
                                </div>
                                <div className='preview_container_track_item'>
                                    {el.album.title}
                                </div>
                            </div>
                        )
                    }) : null
                }
                {
                    user_playlist && user_playlist.length !== 0 ? <Link to={`${match.url}/playlists`} ><h2>Playlist > </h2></Link> : null
                }
                {
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
                }
                {
                    user_album && user_album.length !== 0 ? <Link to={`${match.url}/albums`} ><h2>Albums > </h2></Link> : null
                }
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
            </div>
        )
    }
}

const ProfileHighlights = withRouter(Container);

const mapStateToProps = state => ({
    user_track: state.userMusic.user_track,
    user_playlist: state.userMusic.user_playlist,
    user_album: state.userMusic.user_album,
    auth: state.firebase.auth,
})

const mapDispatchToProps = dispatch => ({
    trackNowInPlayer: url => dispatch(trackNowInPlayer(url)),
    deleteTrack: url => dispatch(deleteTrack(url)),
    deletePlaylist: url => dispatch(deletePlaylist(url)),
    deleteAlbum: url => dispatch(deleteAlbum(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileHighlights)
