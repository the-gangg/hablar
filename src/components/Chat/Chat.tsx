import * as React from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';

import styles from './styles';


interface ChatProps {
  chatName: string;
  match: any;
}

interface ChatStates {
  text: string;
}

class Chat extends React.Component<ChatProps, ChatStates> {
  constructor(props: ChatProps) {
    super(props);
    this.state = {
      text: 'Text here',
    };
  }

  render() {
    return (
      <View style={styles.conversation}>
        <Text style={styles.title}>Chat Name: {this.props.match.params.chatName}</Text>
        <ScrollView>
          <SingleMessage message="first chat" />
          <SingleMessage message="2 chat" isUser />
          <SingleMessage message="3 chat" />
          <SingleMessage message="4 chat" />
          <SingleMessage message="5 chat" />
          <SingleMessage message="6 chat" isUser />
          <SingleMessage message="7 chat" />
          <SingleMessage message="8 chat" />
          <SingleMessage message="9 chat" />
          <SingleMessage message="10 chat" />
          <SingleMessage message="11 chat" isUser />
          <SingleMessage message="12 chat" />
          <TextInput
            style={styles.textInput}
            placeholder='Your email (xxx@xxx.xxx)'
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
          />
        </ScrollView>
      </View>

    );
  }
}

interface SingleMessageProps {
  message: string,
  isUser?: boolean
}

const SingleMessage = ({ message, isUser = false }: SingleMessageProps) => {
  return (
    <View style={isUser ? styles.sent : styles.receive}>
      <Text> {message} </Text>
    </View>
  );
}

export default Chat;
