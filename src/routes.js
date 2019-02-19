import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Summary from './pages/Summary';
import About from './pages/About';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/information/:id" component={Summary} />
      <Route exact path="/about" component={About} />
    </Switch>
  )
}

export default Routes;
