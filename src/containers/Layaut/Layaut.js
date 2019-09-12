import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import { Sidebar } from '../Sidebar/Sidebar'
import Player from '../Player/Player'

export class Container extends Component {
    render() {
        const { children } = this.props;
        return (
            <div id='container'>
                <Sidebar {...this.props} />
                { children }
                <Player />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.firebase.auth
})

const Layaut = withRouter(Container);
  
export default connect(mapStateToProps, null)(Layaut);