import * as React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

const SignUp = () => (
  <View style={styles.container}>
    <FormBox />
  </View>
);

interface FormBoxState {
  name: string,
  email: string,
  password: string,
}

class FormBox extends React.Component<{}, FormBoxState>  {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }
  render() {
    const { name, email, password } = this.state;
    const InputElementsContainer = ({ }) => (
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
      </View>
    );

    return (
      <View style={styles.formBox}>
        <View style={styles.formBoxHeader} >
          <Text style={styles.formBoxHeaderText}>Hermes</Text>
        </View>
        <InputElementsContainer />
        <View style={{ width: '100%', height: 50, backgroundColor: 'black' }} />
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

export default SignUp;