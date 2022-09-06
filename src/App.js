import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';

import './styles/main.scss';

import Navbar from './components/common/Navbar';
import Banner from './components/common/Banner';
import Footer from './components/common/Footer';

import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import NewsPage from './pages/newsPage';
import LoadingPage from './pages/loadingPage';

import ScrollToTop from "./helpers/ScrollToTop";
import Aos from 'aos';
import "aos/dist/aos.css";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    Aos.init({
      offset: (window.innerHeight * 0.25),
      delay: 150,
      duration: 1000,
      easing: 'ease-out-back',
    });
    Aos.refresh();
    let timeout;
    window.addEventListener('resize',()=>{
      clearTimeout(timeout);
      timeout = setTimeout(() => Aos.refresh(), 100);
    });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  },[]);
  return (
    <>
      {isLoading ? <LoadingPage/> : 
        <div className='body-wrapper'>
        <Router>
          <ScrollToTop/>
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
          <Banner/>
          <Footer/>
        </Router>
      </div>}
    </>
  )
}
export default App;