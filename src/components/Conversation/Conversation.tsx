import * as React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const Conversation = () => (
  <View style={styles.conversationPanel}>
    <View style={styles.convoImage}>
      <Image
        style={{ width: 75, height: 75 }}
        source={require('../../assets/generic_icon.png')}
      />
    </View>

    <View style={styles.convoText}>
      <Text> Conversation Title </Text>
    </View>

    <View style={styles.convoUnread}>
      <View style={styles.dot}>
      </View>
    </View>

  </View>
);
export default Conversation;
