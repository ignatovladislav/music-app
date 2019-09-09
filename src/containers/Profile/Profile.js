import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import Item from "./Item";
import './Profile.css'

export class Profile extends Component {
    render() {
        const { location, match, auth } = this.props;
        console.log(this.props)
        const highlights = location.pathname === `/profile/${auth.uid}` ? 'active_link_profile' : null;
        const tracks = location.pathname === `/profile/${auth.uid}/tracks` ? 'active_link_profile' : null;
        const playlists = location.pathname === `/profile/${auth.uid}/playlists` ? 'active_link_profile' : null;
        const albums = location.pathname === `/profile/${auth.uid}/albums` ? 'active_link_profile' : null;

        return (
            <div className='profile_container'>
                <header className='header_profile_continer'>
                    <h3>My Music</h3>
                </header>
                <div className='profile_navbar_container'>
                    <Link to={`${match.url}`} className={`sidebar_link `}>
                        <div className={`profile_navbar_container_items ${highlights}`}>Highlights</div>
                    </Link>
                    <Link to={`${match.url}/tracks`} className={`sidebar_link `}>
                        <div className={`profile_navbar_container_items ${tracks}`}>Favourite tracks</div>
                    </Link>
                    <Link to={`${match.url}/playlists`} className={`sidebar_link`}>
                        <div className={`profile_navbar_container_items ${playlists}`}>Playlists</div>
                    </Link>
                    <Link to={`${match.url}/albums`} className={`sidebar_link`}>
                        <div className={`profile_navbar_container_items ${albums}`}>Albums</div>
                    </Link>
                </div>

                <Route exact path={`${match.path}/:topicId`} component={Item} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, null)(Profile)