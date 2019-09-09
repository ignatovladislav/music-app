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
        // const myMusic = location.pathname === `/user/${auth.uid}` ? 'active_link' : null;
        // const tracks = location.pathname === `/user/${auth.uid}/tracklist` ? 'active_link' : null;
        // const playlist = location.pathname ===  `/user/${auth.uid}/playlist` ? 'active_link' : null;
        // const albums = location.pathname ===  `/user/${auth.uid}/albums` ? 'active_link' : null;
        
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
                <Link to={`/user/${auth.uid}/tracklist`} className={`sidebar_link item`}>
                    <div className={`sidebar_item user `}>Tracks</div>
                </Link>
                <Link to={`/user/${auth.uid}/playlist`} className={`sidebar_link item`}>
                    <div className={`sidebar_item user `}>Playlist</div>
                </Link>
                <Link to={`/user/${auth.uid}/albums`} className={`sidebar_link item`}>
                    <div className={`sidebar_item user `}>Albums</div>
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
