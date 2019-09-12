import React from 'react'
import './SignedInLinks.css'

import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import { Link } from 'react-router-dom'

const SignedInLinks = props => {
  const { auth, profile } = props;

  return (
    <div className='logout_and_profile_container'>
    {
      !auth.photoURL ?  <Link to='/' onClick={props.signOut} className='logout_container logout' >Log Out</Link> :
      <Link to='/' onClick={props.signOut} className='logout_container logout' style={{height : '60px', paddingTop : '7%'}}>Log Out</Link>
    }
    
    {
      !auth.photoURL ? <Link to={`/user`} className='profile_container_name logout' style={{textAlign: 'center'}}>{profile.initials}</Link> :
      <Link to={`/user`} className='profile_container_ava logout' style={{height : '60px'}}>
        <img src={auth.photoURL} alt='avatar' className='avatar_user'/>
      </Link>
    }
  </div>
  )
}


const mapStateToProps = state => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
})

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks)