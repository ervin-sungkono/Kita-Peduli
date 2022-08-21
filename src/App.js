import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './styles/main.scss';

import HomePage from './pages/homePage';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage 
              path="home"
            />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
export default App;