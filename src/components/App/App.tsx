import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Route, Switch } from 'react-router-native';

import Home from "../Home";

import styles from './styles';

export default class App extends React.Component<{}> {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

