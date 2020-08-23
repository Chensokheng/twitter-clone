import React from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import ProtectRoute from './Protected.routes';
import PublicRoute from './Public.routes';
import Home from '../page/Home';
import Register from '../page/Register';
export default function Routes({ auth }) {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          render={() =>
            !auth ? <Redirect to="/register" /> : <Redirect to="/home" />
          }
        />
        <ProtectRoute path="/home" component={Home} />
        <PublicRoute path="/register" component={Register} />
      </Switch>
    </Router>
  );
}
