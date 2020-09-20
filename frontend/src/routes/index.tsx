import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListPessoas from '../Pages/ListPessoas';
import Main from '../Pages/Main';

const router = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/pessoas" component={ListPessoas} />
  </Switch>
);

export default router;
