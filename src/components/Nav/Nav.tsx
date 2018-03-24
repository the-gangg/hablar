import * as React from 'react';
import { Text, View } from 'react-native';
import { Link, Route } from 'react-router-native';

import Messages from '../Messages';
import Settings from "../Settings";
import AddMessage from '../AddMessage';

import styles from './styles';

const Nav = (props: {}) => (
  <View>

    <View style={styles.nav}>
      <Link
        to="/messages"
        underlayColor='#f0f4f7'
        style={styles.navItem}>
        <Text>Messages</Text>
      </Link>
      <Link
        to="/settings"
        underlayColor='#f0f4f7'
        style={styles.navItem}>
        <Text>Settings</Text>
      </Link>
      <Link
        to="/addMessage"
        underlayColor='#f0f4f7'
        style={styles.navItem} >
        <Text>Add Message</Text>
      </Link>
    </View>
  </View>
);

export default Nav;
