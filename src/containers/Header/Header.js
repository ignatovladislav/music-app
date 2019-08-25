import React, { Component } from 'react'
import './Header.css'

import { Headline } from '../../components/Headline/Headline'
import SignedInLinks from '../../components/SignedInLinks/SignedInLinks'
import { SignedOutLinks } from '../../components/SignedOutLinks/SignedOutLinks'

import { connect } from 'react-redux'

class Header extends Component {
  render() {
    const { auth, profile } = this.props;
    console.log(this.props)
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  
    return (
        <header>
          <Headline />
          { links }
        </header>
    )
  }
}

const mapStateToProps = state => {
  return{
    auth: state.firebase.auth,
    authError: state.auth.authError,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Header)