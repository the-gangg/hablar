import * as React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Redirect, Link } from 'react-router-native';

import styles from './styles';

const LogIn = () => (
  <View style={styles.container}>
    <FormBox />
    <Text>Already have an account?</Text>
    <Link to={{ pathname: '/login' }} ><Text style={{ color: 'skyblue' }}>Log in</Text></Link>
  </View >
);


interface FormBoxState {
  name: string,
  email: string,
  password: string,
  isAuth: boolean,
  errors?: {
    name?: string;
    email?: string;
    password?: string;
  } | null
}

class FormBox extends React.Component<{}, FormBoxState>  {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      isAuth: false,
      errors: null,
    };

    this.validateInput = this.validateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  validateInput() {
    // TODO(DEV) validate input, and set error in state
    return true;
  }

  renderErrors() {
    // TODO(DEV) return error view component
  }

  handleSubmit() {
    const isValid = this.validateInput();
    if (!isValid) {
      this.renderErrors();
    }

    // TODO(DEV) get succes signal 
    const success = true;
    if (success) {
      // redirect to home
      this.setState({ isAuth: true });
    }
  }

  render() {
    const { isAuth, name, email, password } = this.state;
    if (isAuth) {
      return (
        <Redirect to={{
          pathname: '/',
        }} />
      );
    }

    const InputElementsContainer = () => (
      <View style={styles.inputElements} >
        <TextBox
          onChangeText={(text) => { }}
          placeholder='Your nick name (Alex)'
          label={'name'}
          value={name}
        />
        <TextBox
          onChangeText={(text) => { }}
          placeholder='Your email (xxx@xxx.xxx)'
          label={'email'}
          value={email}
        />
        <TextBox
          onChangeText={(text) => { }}
          placeholder='xxxxxxxxxx'
          label={'password'}
          value={password}
          secureTextEntry
        />
        <Button onPress={this.handleSubmit} title="Sign Up" />
      </View>

    );

    return (
      <View style={styles.formBox}>
        <View style={styles.formBoxHeader} >
          <Text style={styles.formBoxHeaderText}>Hermes</Text>
        </View>
        {this.renderErrors()}
        <InputElementsContainer />
        {/* <View style={{ width: '100%', height: 50, backgroundColor: 'black' }} /> */}
      </View>
    );
  }
}



interface TextBoxProps {
  label: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  value?: string;
}

const TextBox = ({ label, onChangeText, placeholder, secureTextEntry = false, value }: TextBoxProps) => {
  const formattedPlaceholder = placeholder && `  ${placeholder}`;

  return (
    <View style={{ padding: 10, }}>
      <Text style={{ fontWeight: 'bold' }}>{label.toLocaleUpperCase()}: </Text>
      <TextInput style={styles.textBox} placeholder={formattedPlaceholder} onChangeText={onChangeText} secureTextEntry={secureTextEntry} value={value} />
    </View>
  );
}

export default LogIn;