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
import CountryChartContainer from './containers/CountryChartContainer/CountryChartContainer';
// import MoodContainerItem from './containers/CountryChart/MoodContainerItem';

export class App extends Component {
  render() {
    // console.log(this.props)
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={ Main } />
            <Route path="/login" component={ Login } />
            <Route path="/register" component={ Singup } />
            <Route path="/user" >
              <Sidebar {...this.props}/>
                <Route exact path='/user' component={ HomePageUser } />
                <Route path='/user/playlist/:id' component={ PlaylistContainers } />
                <Route path='/user/album/:id' component={ AlbumContainers } />
                <Route path='/user/artist/:id' component={ ArtistContainers } />
            </Route>
            <Route path="/expore" >
              <Sidebar {...this.props}/>
              <Route exact path='/expore' component={ Explore } />
              <Route path='/expore/:id' component={ CountryChartContainer } />
              {/* <Route path='/expore/:id/:rt' component={ MoodContainerItem } /> */}
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