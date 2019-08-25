import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { connect } from 'react-redux'

import './App.css'
import Header from './containers/Header/Header'
import MainUser from './containers/MainUser/MainUser'
import { Main } from './containers/Main/Main'
import Login from './components/Login/Login'
import Singup from './components/SignUp/SignUp'
// import Main from './containers/Main/Main'




export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path='/user/:id' component={MainUser} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Singup} />
          </Switch>
        </div>
      </BrowserRouter>
    ) 
  }
}


const mapStateToProps = state => {
  return{
    auth: state.firebase.auth
  }
}


export default connect(mapStateToProps, null)(App)