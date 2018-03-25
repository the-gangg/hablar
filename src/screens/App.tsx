import * as React from 'react';
import { Route, Switch, NativeRouter } from 'react-router-native';

import Home from './Home';
import LogIn from './LogIn';
import SignUp from './SignUp';

const App = () => (
  <NativeRouter>
    <Switch>
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={LogIn} />
      <Route path="/" component={Home} />
    </Switch>
  </NativeRouter>
);

export default App;

