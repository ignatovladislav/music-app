import React, { Component } from 'react'

import PreviewTracks from '../../components/deezerMusic/Search/Preview/PreviewTracks';
import PreviewArtist from '../../components/deezerMusic/Search/Preview/PreviewArtist';
import PreviewAlbum from '../../components/deezerMusic/Search/Preview/PreviewAlbum';
import PreviewPlaylist from '../../components/deezerMusic/Search/Preview/PreviewPlaylist';

export default class Container extends Component {
    render() {
        const { 
            history, 
            search_track_success, 
            search_artist_success, 
            search_album_success, 
            search_playlist_success, 
            playNow,
            addTrack,
        } = this.props;
        return (
            <>  
                <h2>Serch result: {history.location.pathname.split('/')[2]}</h2>
                {
                    search_track_success ? <PreviewTracks 
                                                history={history} 
                                                preview_tracks={search_track_success} 
                                                playNow={playNow}
                                                addTrack={addTrack}
                                            /> : null
                }
                {
                    search_artist_success ? <PreviewArtist preview_artist={search_artist_success} data='artist' /> : null
                }
                {
                    search_album_success ? <PreviewAlbum preview_album={search_album_success} data='album' /> : null
                }
                {
                    search_playlist_success ?  <PreviewPlaylist preview_playlist={search_playlist_success} data='playlist' /> : null
                } 
            </>
        )
    }
}

// const mapStateToProps = (state) => ({
    
// })

// const mapDispatchToProps = {
    
// }
//  connect(mapStateToProps, mapDispatchToProps)(Container)
