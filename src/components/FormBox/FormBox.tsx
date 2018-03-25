import * as React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import styles from './styles';

export interface FormBoxState {
  error?: string;
  inputs: { [input: string]: string };
}

export interface FormInput extends TextBoxAttributes {
  validate?: (value: string) => true | string;
}

export interface FormBoxProps {
  name: string;
  inputs: Array<FormInput>;
  onSubmit: (data: { [key: string]: any }) => void;
}

class FormBox extends React.Component<FormBoxProps, FormBoxState>  {
  constructor(props: FormBoxProps) {
    super(props);
    this.state = {
      inputs: {},
    };

    for (const input of props.inputs) {
      this.state.inputs[input.label] = input.value || '';
    }

    this.validateInput = this.validateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  validateInput(): boolean {
    // TODO(DEV) validate input, and set error in state
    return true;
  }

  renderErrors() {
    // TODO(DEV) return error view component
    return null;
  }

  handleSubmit() {
    const isValid = this.validateInput();
    if (!isValid) {
      this.renderErrors();
    }

    this.props.onSubmit({ ...this.state.inputs });
  }

  handleChangeText(label: string) {
    return (value: string) => (
      this.setState({ inputs: { ...this.state.inputs, [label]: value } }));
  }

  render() {
    const InputElementsContainer = this.props.inputs.map((input: FormInput, i: number) => (
      <TextBox key={`textbox-${i}`} {...input} onChangeText={this.handleChangeText(input.label)} />
    ));

    return (
      <View style={styles.formBox}>
        <View style={styles.formBoxHeader} >
          <Text style={styles.formBoxHeaderText}>Hermes</Text>
        </View>
        {this.renderErrors()}
        <View style={styles.inputElements} >
          {InputElementsContainer}
          <Button onPress={this.handleSubmit} title={this.props.name} />
        </View>
        {/* <View style={{ width: '100%', height: 50, backgroundColor: 'black' }} /> */}
      </View>
    );
  }
}

interface TextBoxAttributes {
  label: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  value?: string;
}

interface TextBoxProps extends TextBoxAttributes {
  onChangeText?: (text: string) => void;
}

const TextBox = (props: TextBoxProps) => {
  const { label, placeholder, } = props,
    // TODO(IMPROV) find better way to pad placeholder
    formattedPlaceholder = placeholder && `  ${placeholder}`;

  return (
    <View style={{ padding: 10, }}>
      <Text style={{ fontWeight: 'bold' }}>{label.toLocaleUpperCase()}: </Text>
      <TextInput style={styles.textBox} {...props} placeholder={formattedPlaceholder} />
    </View>
  );
};

export default FormBox;