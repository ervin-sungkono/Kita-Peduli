import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './styles/main.scss';

import Navbar from './components/common/Navbar';

import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import NewsPage from './pages/newsPage';

const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/news">
            <NewsPage />
          </Route>
          <Route exact path="/donate">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
export default App;