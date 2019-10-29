import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavigationBar from './NavigationBar';
import Home from './Home';
import Janitors from './Janitors';

import { ROUTE } from './routes';

const App: React.FC = () => (
  <Router>
    <NavigationBar />
    <div className="mt-3">
      <Switch>
        <Route exact path={ROUTE.HOME}>
          <Home />
        </Route>
        <Route ecxact path={ROUTE.JANITORS}>
          <Janitors />
        </Route>
        <Route exact path={ROUTE.TEST}>
          <></>
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
