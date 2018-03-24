import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

import Nav from "../Nav";
import Home from "../Home";
import About from "../About";

import styles from './styles';

export default class App extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Nav />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </View>
    );
  }
}

