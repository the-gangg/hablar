import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Conversation from '../Conversation';

import styles from './styles';

const Messages = (props: {}) => (
  <ScrollView style={styles.container}>
    <Conversation/>
    <Conversation/>
    <Conversation/>
    <Conversation/>
    <Conversation/>
    <Conversation/>
  </ScrollView>
);
export default Messages;
