import React, { Component } from 'react'
import './SearchResult.css'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Track } from '../../components/deezerMusic/Search/Tracks';
import { Artist } from '../../components/deezerMusic/Search/Artist';
import { Album } from '../../components/deezerMusic/Search/Album';
import { Playlist } from '../../components/deezerMusic/Search/Playlist';


export class SearchResult extends Component {
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        const { auth } = this.props;

        if (!auth.uid) return <Redirect to='/' />
        return (
            <div className='search_result_container'>
                <Track />
                <Artist />
                <Album />
                <Playlist />
                SearchResult
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    error: state.music.error,
    auth: state.firebase.auth,
})

// const mapDispatchToProps = {
    
// }

export default connect(mapStateToProps, null)(SearchResult)
