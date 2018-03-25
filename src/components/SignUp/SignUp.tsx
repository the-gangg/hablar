import * as React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';

import FormBox from '../FormBox';
import styles from './styles';

const SignUp = () => (
  <View style={styles.container}>
    <FormBox name='Sign Up' inputs={inputs} onSubmit={(data: {}) => { console.log(data); }} />
    <Text>Already have an account?</Text>
    <Link to={{ pathname: '/login' }} ><Text style={{ color: 'skyblue' }}>Log in</Text></Link>
  </View >
);

const inputs = [
  { label: 'name', placeholder: 'Your nick name (Alex)' },
  { label: 'email', placeholder: 'Your email (xxx@xxx.xxx)', },
  { label: 'password', placeholder: 'xxxxxxxxxx', },
];

export default SignUp;