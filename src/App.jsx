import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Success from './components/Success/Success';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/success" component={Success} />
  </Switch>
);

export default App;
