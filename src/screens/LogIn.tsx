import * as React from 'react';
import { View, Text } from 'react-native';
import { Link, Redirect } from 'react-router-native';

import { HermesRoutes } from '../config/constants';

import FormBox from '../components/FormBox';
import styles from './styles';

interface LoginState {
  isAuth: boolean;
}

class Login extends React.Component<{}, LoginState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isAuth: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data: { [key: string]: any }) {
    // TODO(DEV) call authentication lib
    let success = true;
    for (const input of inputs) {
      if (data[input.label].length < 1) {
        success = false;
      }
    }

    if (success) this.setState({ isAuth: true });
  }

  render() {
    if (this.state.isAuth) {
      return <Redirect to={{ pathname: HermesRoutes.HOME }} />;
    }

    return (
      <View style={styles.container}>
        <FormBox name='Log In' inputs={inputs} onSubmit={this.handleSubmit} />
        <Text>Don’t have an account?</Text>
        <Link to='/signup' ><Text style={{ color: 'skyblue' }}>Sign Up</Text></Link>
      </View >
    );
  }
}

const inputs = [
  { label: 'email', placeholder: 'Your email (xxx@xxx.xxx)', },
  { label: 'password', placeholder: 'xxxxxxxxxx', },
];

export default Login;