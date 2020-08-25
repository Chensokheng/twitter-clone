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
import Register from '../page/auth/view/Register';
import useAuthState from '../shared_hook/useAuthState';
export default function Routes() {
  const [authState, _] = useAuthState();
  const { isAuth } = authState;

  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          render={() =>
            !isAuth ? <Redirect to="/register" /> : <Redirect to="/home" />
          }
        />
        <ProtectRoute path="/home" component={Home} auth={isAuth} />
        <PublicRoute path="/register" component={Register} auth={isAuth} />
      </Switch>
    </Router>
  );
}
