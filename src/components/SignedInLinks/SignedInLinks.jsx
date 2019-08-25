import React from 'react'
import './SignedInLinks.css'

import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import { Link } from 'react-router-dom'

const SignedInLinks = props => {
  const avatarText = props.auth.email[0].toUpperCase();

  return (
    <div className='logout_and_profile_container'>
      <Link to='/' onClick={props.signOut}className='logout_container logout'>Log Out</Link>
      <Link to={`user/${props.auth.uid}`} className='profile_container logout'>{avatarText}</Link>
    </div>
  )
}


const mapStateToProps = state => {
  return{
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks)