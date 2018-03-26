import * as React from 'react';
import { Text, View, ViewStyle } from 'react-native';
import { Link } from 'react-router-native';

import styles from './styles';

const Nav = ({ style }: { style?: ViewStyle }) => (
  <View style={[styles.nav, style]}>
    <Link
      to="/messages"
      underlayColor='#f0f4f7'
      style={[styles.navItem, { backgroundColor: 'green' }]}>
      <Text>Messages</Text>
    </Link>
    <Link
      to="/createChat"
      underlayColor='#f0f4f7'
      style={styles.navItem} >
      <Text>Add Message</Text>
    </Link>
    <Link
      to="/signup"
      underlayColor='#f0f4f7'
      style={[styles.navItem, { backgroundColor: 'white' }]} >
      <Text>Sign Up</Text>
    </Link>
    <Link
      to="/settings"
      underlayColor='#f0f4f7'
      style={styles.navItem}>
      <Text>Settings</Text>
    </Link>
    <Link
      to="/login"
      underlayColor='#f0f4f7'
      style={[styles.navItem, { backgroundColor: 'green' }]}>
      <Text>Login</Text>
    </Link>
  </View>
);

export default Nav;
