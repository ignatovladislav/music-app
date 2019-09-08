import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import { Sidebar } from '../Sidebar/Sidebar'

export class Container extends Component {
    render() {
        const { children } = this.props

        return (
            <div id='container'>
                <Sidebar {...this.props} />
                { children }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
      auth: state.firebase.auth
    }
}

const Layaut = withRouter(Container);
  
export default connect(mapStateToProps, null)(Layaut);