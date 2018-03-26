import * as React from 'react';
import { View, ViewStyle } from 'react-native';
import { Link } from 'react-router-native';
import { Icon } from 'react-native-elements';

import { Colors } from '../../config/constants';
import styles from './styles';

const ICO_SIZE = 30;

const NavIcon = ({ name, active = false }: { name: string, active?: boolean }) => (
  <Icon
    name={name}
    size={ICO_SIZE}
    iconStyle={styles.iconStyle}
    color={active ? Colors.ICON_HIGHLIGHT : undefined} />
);

const Nav = ({ style }: { style?: ViewStyle }) => (
  <View style={[styles.nav, style]}>
    <Link
      to="/messages"
      underlayColor='#f0f4f7'
      style={styles.navItem}>
      <NavIcon name='message' />
    </Link>
    <Link
      to="/createChat"
      underlayColor='#f0f4f7'
      style={styles.navItem} >
      <NavIcon name='person-add' />
    </Link>
    <Link
      to="/signup"
      underlayColor='#f0f4f7'
      style={styles.navItem} >
      <NavIcon name='person-outline' />
    </Link>
    <Link
      to="/login"
      underlayColor='#f0f4f7'
      style={styles.navItem}>
      <NavIcon name='person-pin' />
    </Link>
    <Link
      to="/settings"
      underlayColor='#f0f4f7'
      style={styles.navItem}>
      <NavIcon name='settings' />
    </Link>
  </View>
);

export default Nav;
