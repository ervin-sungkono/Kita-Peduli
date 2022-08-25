import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './styles/main.scss';

import HomePage from './pages/homePage';
import NewsPage from './pages/newsPage';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path="/about">
            <HomePage/>
          </Route>
          <Route exact path="/news">
            <NewsPage/>
          </Route>
          <Route exact path="/donate">
            <HomePage/>
          </Route>
        </Switch>
      </Router>
    </>
  )
}
export default App;