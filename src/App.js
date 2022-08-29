import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './styles/main.scss';

import Banner from './components/common/Banner';
import Footer from './components/common/Footer';

import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import NewsPage from './pages/newsPage';

import ScrollToTop from "./helpers/ScrollToTop";
import Aos from 'aos';
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      delay: 150,
      duration: 600,
      easing: 'ease-in-out',
      once: true,
    });
    Aos.refresh();
  },[]);
  return (
    <>
      <Router>
        <ScrollToTop/>
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