import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

import styles from './styles';

export default class About extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text>About</Text>
        <Text>This is the about page.</Text>
      </View>
    );
  }
}

