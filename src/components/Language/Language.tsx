import * as React from 'react';
import { View, Picker, Text } from 'react-native';

import styles from './styles';

interface LanguageProps {
  language: string;
  onValueChange: (value: string) => void;
}

const Language = ({ language, onValueChange }: LanguageProps) => (
  <View style={styles.panel}>
    <Text> Entered LanguagePanel </Text>
    <Picker
      selectedValue={language}
      onValueChange={onValueChange}>
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
  </View>
);
export default Language;
