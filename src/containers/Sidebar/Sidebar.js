import React, { Component } from 'react'
import './Sidebar.css'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


export class Sidebar extends Component {
    render() {
        const { location, auth } = this.props;
        console.log(this.props)
        // const home = location.pathname === `/user` ? 'active_link' : null;
        // const expore = location.pathname === `/user/expore` ? 'active_link' : null;
        // const myMusic = location.pathname === `/user/${auth.uid}` ? 'active_link' : null;
        // const tracks = location.pathname === `/user/${auth.uid}/tracklist` ? 'active_link' : null;
        // const playlist = location.pathname ===  `/user/${auth.uid}/playlist` ? 'active_link' : null;
        // const albums = location.pathname ===  `/user/${auth.uid}/albums` ? 'active_link' : null;
        
        return (
            <div className='sidebar_conainer'>
                <Link to={`/user`} className={`sidebar_link`}>
                    <div className={`sidebar_item `}>Home</div>
                </Link>
                <Link to={`/user/expore`} className={`sidebar_link `}> 
                    <div className={`sidebar_item `}> Expore </div>
                </Link>  
                <Link to={`/user/${auth.uid}`} className={`sidebar_link `}> 
                    <div className={`sidebar_item `}> My Music </div>
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


const mapStateToProps = state => {
    return{
      auth: state.firebase.auth
    }
}
  
  
export default connect(mapStateToProps, null)(Sidebar)
