import * as React from 'react';
import { Route, Switch, NativeRouter } from 'react-router-native';

import { HermesRoutes } from '../config/constants';

import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import PrivateRoute from '../components/utils/PrivateRoute';

const App = () => (
  <NativeRouter>
    <Switch>
      <Route path={HermesRoutes.SIGNUP} component={SignUp} />
      <Route path={HermesRoutes.LOGIN} component={Login} />
      <PrivateRoute path={HermesRoutes.HOME} component={Home} />
    </Switch>
  </NativeRouter>
);

export default App;

