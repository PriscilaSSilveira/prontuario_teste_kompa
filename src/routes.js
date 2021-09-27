import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import List from './pages/list';
import Register from './pages/register';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route
        component={props => <List {...props} />}
        exact path='/'
      />
      <Route
        component={props => <Register {...props} />}
        exact path='/register'
      />
    </Switch>
  </BrowserRouter>
)

export default Routes;