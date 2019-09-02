import React, { Component } from 'react'
import './Sidebar.css'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

export class Sidebar extends Component {
    render() {
        const { location } = this.props;

        const home = location.pathname === `/user` ? 'active_link' : null;
        const expore = location.pathname === `/user/expore` ? 'active_link' : null;
        return (
            <div className='sidebar_conainer'>
                <Link to={`/user`} className={`sidebar_link`}>
                    <div className={`sidebar_item ${home}`}>Home</div>
                </Link>
                <Link to={`/user/expore`} className={`sidebar_link `}> 
                    <div className={`sidebar_item ${expore}`}> Expore </div>
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
