import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom"
import { connect } from 'react-redux'

import './App.css'
import Header from './containers/Header/Header'
import { Main } from './containers/Main/Main'
import Login from './containers/Login/Login'
import Singup from './containers/SignUp/SignUp'
import HomePageUser from './containers/HomePageUser/HomePageUser'
import Explore from './containers/Explore/Explore'
import PlaylistContainers from './containers/PlaylistContainers/PlaylistContainers'
import AlbumContainers from './containers/AlbumContainers/AlbumContainers'
import ArtistContainers from './containers/ArtistContainers/ArtistContainers'
import CountryChartContainer from './containers/CountryChartContainer/CountryChartContainer'
import SearchResult from './containers/SearchResult/SearchResult'
import Profile from './containers/Profile/Profile'

import PrivateRoute from './router/privateRouter'
// import { DetailItems } from './components/deezerMusic/Search/DetailItems'

export class App extends Component {
  render() {
    const { auth } = this.props;
    return (
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={ Main } /> 
            <Route path="/login" component={ Login } />
            <PrivateRoute path='/user' auth={auth.uid} component={ HomePageUser } />
            <PrivateRoute path='/search/:id' auth={auth.uid} component={ SearchResult } /> 
            {/* <PrivateRoute path='/search/:id/track' auth={auth.uid} component={ DetailItems } /> */}
            <PrivateRoute path='/playlist/:id' auth={auth.uid} component={ PlaylistContainers } />
            <PrivateRoute path='/album/:id' auth={auth.uid} component={ AlbumContainers } />
            <PrivateRoute path='/artist/:id' auth={auth.uid} component={ ArtistContainers } />
            <PrivateRoute path='/expore' auth={auth.uid} component={ Explore } />
            <PrivateRoute path='/profile/:id' auth={auth.uid} component={ Profile } />
            <PrivateRoute path='/:rest/:id' auth={auth.uid} component={ CountryChartContainer } />
            
          </Switch>
        </div>
    ) 
  }
}


const mapStateToProps = state => {
  return{
    auth: state.firebase.auth
  }
}


export default connect(mapStateToProps, null)(App)