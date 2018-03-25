import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Route, Switch } from 'react-router-native';

import Home from "../Home";
import LogIn from '../LogIn';
import SignUp from '../SignUp';

import styles from './styles';

export default class App extends React.Component<{}> {
  render() {
    return (
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

