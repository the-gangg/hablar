import * as React from 'react';
import { ScrollView } from 'react-native';
import Conversation from '../Conversation';

import styles from './styles';

const Messages = () => (
  <ScrollView style={styles.container}>
    <Conversation />
    <Conversation />
    <Conversation />
    <Conversation />
    <Conversation />
    <Conversation />
  </ScrollView>
);
export default Messages;
