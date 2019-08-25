import React from 'react'
import './Header.css'

import { Headline } from '../../components/Headline/Headline'
import SignedInLinks from '../../components/SignedInLinks/SignedInLinks'
import { SignedOutLinks } from '../../components/SignedOutLinks/SignedOutLinks'

import { connect } from 'react-redux'

const Header = props => {
  const { auth } = props;

  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;

  return (
      <header>
        <Headline />
        { links }
      </header>
  )
}

const mapStateToProps = state => {
  return{
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Header)