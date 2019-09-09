import React, { Component } from 'react'
import './Sidebar.css'

import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'


export class Sidebar extends Component {
    render() {
        const { location, auth } = this.props;
        const home = location.pathname === `/user` ? 'active_link' : null;
        const expore = location.pathname === `/expore` ? 'active_link' : null;
        const profile = location.pathname === `/profile/${auth.uid}` ? 'active_link' : null;
        // const myMusic = location.pathname === `/profile/${auth.uid}` ? 'active_link' : null;
        const tracks = location.pathname === `/profile/${auth.uid}/tracks` ? 'active_link' : null;
        const playlist = location.pathname ===  `/profile/${auth.uid}/playlists` ? 'active_link' : null;
        const albums = location.pathname ===  `/profile/${auth.uid}/albums` ? 'active_link' : null;
        
        return (
            <div className='sidebar_conainer'>
                <Link to={`/user`} className={`sidebar_link`}>
                    <div className={`sidebar_item ${home}`}>Home</div>
                </Link>
                <Link to={`/expore`} className={`sidebar_link `}> 
                    <div className={`sidebar_item ${expore}`}> Expore </div>
                </Link>  
                <Link to={`/profile/${auth.uid}`} className={`sidebar_link `}> 
                    <div className={`sidebar_item ${profile}`}> My Music </div>
                </Link>  
                <Link to={`/profile/${auth.uid}/tracks`} className={`sidebar_link item`}>
                    <div className={`sidebar_item_profile ${tracks}`}>Tracks</div>
                </Link>
                <Link to={`/profile/${auth.uid}/playlists`} className={`sidebar_link item`}>
                    <div className={`sidebar_item_profile ${playlist}`}>Playlist</div>
                </Link>
                <Link to={`/profile/${auth.uid}/albums`} className={`sidebar_link item`}>
                    <div className={`sidebar_item_profile ${albums}`}>Albums</div>
                </Link>
            </div>
        )
    }
}

const test = withRouter(Sidebar)
const mapStateToProps = state => {
    return{
      auth: state.firebase.auth
    }
}
  
  
export default connect(mapStateToProps, null)(test)
