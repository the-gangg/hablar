import * as React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';

import FormBox from '../components/FormBox';
import styles from './styles';

const LogIn = () => (
  <View style={styles.container}>
    <FormBox name='Log In' inputs={inputs} onSubmit={(data: {}) => { data; }} />
    <Text>Don’t have an account?</Text>
    <Link to='/signup' ><Text style={{ color: 'skyblue' }}>Sign Up</Text></Link>
  </View >
);

const inputs = [
  { label: 'email', placeholder: 'Your email (xxx@xxx.xxx)', },
  { label: 'password', placeholder: 'xxxxxxxxxx', },
];

export default LogIn;