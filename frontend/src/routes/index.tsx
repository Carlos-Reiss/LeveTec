import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../Pages/Main';

const router = () => (
  <Switch>
    <Route path="/" exact component={Main} />
  </Switch>
);

export default router;
