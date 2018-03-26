import * as React from 'react';
import { Route, Switch, NativeRouter } from 'react-router-native';

import { HermesRoutes } from '../config/constants';

import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';

const App = () => (
  <NativeRouter>
    <Switch>
      <Route path={HermesRoutes.SIGNUP} component={SignUp} />
      <Route path={HermesRoutes.LOGIN} component={Login} />
      <Route path={HermesRoutes.HOME} component={Home} />
    </Switch>
  </NativeRouter>
);

export default App;

