import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Blog from '../pages/Blog';
import About from '../pages/About';
import Description from '../pages/Description';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Blog} />
    <Route path="/about" component={About} />
    <Route path="/description" component={Description} />
  </Switch>
);

export default Routes;
