import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styles from './styles';

export default class Home extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.ts to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

