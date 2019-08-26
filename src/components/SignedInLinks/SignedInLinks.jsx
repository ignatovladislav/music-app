import React from 'react'
import './SignedInLinks.css'

import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import { Link } from 'react-router-dom'

const SignedInLinks = props => {
  const photo = props.auth.photoURL;
  const initials = props.profile.initials
  return (
    <div className='logout_and_profile_container'>
      {
        !photo ?  <Link to='/' onClick={props.signOut} className='logout_container logout' >Log Out</Link> :
        <Link to='/' onClick={props.signOut} className='logout_container logout' style={{height : '60px', paddingTop : '7%'}}>Log Out</Link>
      }
      
      {
        !photo ? <Link to={`user/${props.auth.uid}`} className='profile_container logout' style={{textAlign: 'center'}}>{initials}</Link> :
        <Link to={`user/${props.auth.uid}`} className='profile_container logout' style={{height : '60px'}}>
          <img src={photo} alt='avatar' className='avatar_user'/>
        </Link>
      }
    </div>
  )
}


const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks)