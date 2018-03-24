import * as React from 'react';
import { Text, View } from 'react-native';
import { Link } from 'react-router-native';

import styles from './styles';

const Nav = (props: {}) => (
  <View style={styles.nav}>
    <Link
      to="/"
      underlayColor='#f0f4f7'
      style={styles.navItem}>
      <Text>Home</Text>
    </Link>
    <Link
      to="/about"
      underlayColor='#f0f4f7'
      style={styles.navItem}>
      <Text>About</Text>
    </Link>
    <Link
      to="/topics"
      underlayColor='#f0f4f7'
      style={styles.navItem} >
      <Text>Topics</Text>
    </Link>
  </View>
);

export default Nav;
