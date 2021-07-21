import React from 'react'
import MainNavBar from './layouts/MainNavBar'
import TopNavBar from './layouts/TopNavBar'
import './styles/index.css'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Home from './pages/home/Home'

// import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path='/'><Home/></Route>
      </Switch>
    </Router>
    </>
  )
}

export default App

