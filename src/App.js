import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Shortlisted from './components/Shortlisted';
import Rejected from './components/Rejected';
import Navbar from './components/Navbar';
import CandidatePage from './components/CandidatePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.css';


function App() {
  return(
    <Router>
        <Navbar />
        <Switch>
            <Route  path='/' exact component={Home}/>
            <Route  path='/shortlisted' exact component={Shortlisted}/>
            <Route  path="/rejected" exact component={Rejected}/>
            <Route  path="/candidate/:id" exact component={CandidatePage}/>
        </Switch>
    </Router>
  )
}

export default App;