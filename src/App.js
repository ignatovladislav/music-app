import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { connect } from 'react-redux'

import './App.css'
import Header from './containers/Header/Header'
import { Main } from './containers/Main/Main'
import Login from './containers/Login/Login'
import Singup from './containers/SignUp/SignUp'
import Sidebar from './containers/Sidebar/Sidebar'
import HomePageUser from './containers/HomePageUser/HomePageUser'
import Explore from './containers/Explore/Explore'
import Player from './containers/Player/Player'
import PlaylistContainers from './containers/PlaylistContainers/PlaylistContainers';
import AlbumContainers from './containers/AlbumContainers/AlbumContainers';
import ArtistContainers from './containers/ArtistContainers/ArtistContainers';
import GenreContainers from './containers/GenreContainers/GenreContainers';


export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={ Main } />
            <Route path="/login" component={ Login } />
            <Route path="/register" component={ Singup } />
            <Route path='/user'>
              <main id='main_context_user'>
                <Route exact component={ Sidebar } />
                {/* <Route exact component={ Player } /> */}
                <Route exact path='/user' component={ HomePageUser } />
                <Route path='/user/expore' component={ Explore } />
                <Route path='/user/playlist/:id' component={ PlaylistContainers } />
                <Route path='/user/album/:id' component={ AlbumContainers } />
                <Route path='/user/artist/:id' component={ ArtistContainers } />
                <Route path='/user/genre/:id' component={ GenreContainers } />
              </main>
            </Route>
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