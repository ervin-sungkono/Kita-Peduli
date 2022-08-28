import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './styles/main.scss';

import Navbar from './components/common/Navbar';
import Banner from './components/common/Banner';
import Footer from './components/common/Footer';

import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import NewsPage from './pages/newsPage';

const App = () => {
  return (
    <>
      <Router>
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
        <Banner/>
        <Footer/>
      </Router>
    </>
  )
}
export default App;