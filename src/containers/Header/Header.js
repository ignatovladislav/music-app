import React, { Component } from 'react'
import './Header.css'

import { Headline } from '../../components/Headline/Headline'
import SignedInLinks from '../../components/SignedInLinks/SignedInLinks'
import { SignedOutLinks } from '../../components/SignedOutLinks/SignedOutLinks'

import { connect } from 'react-redux'
import Search from '../Search/Search'

class Header extends Component {
  render() {
    const { auth } = this.props;
    const search = auth.uid ? <Search /> : null;
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  
    return (
        <header>
          <Headline />
          { search }
          { links }
        </header>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

export default connect(mapStateToProps)(Header)