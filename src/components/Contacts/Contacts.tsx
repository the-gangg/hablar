import * as React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';

import { HermesRoutes } from '../../config/constants';

import styles from './styles';

const Contacts = () => (
  <View style={styles.container}>
    <Text> In New Message</Text>
    <Link to={HermesRoutes.LOGIN}><Text>Go to Login</Text></Link>
  </View>
);
export default Contacts;
