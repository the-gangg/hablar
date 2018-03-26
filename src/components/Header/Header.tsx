import * as React from 'react';
import { View, Text, ViewStyle } from 'react-native';

import styles from './styles';

const Header = ({ style }: { style?: ViewStyle }) => (
  <View style={[styles.container, style]}>
    <Text>Header</Text>
  </View>
);
export default Header;
