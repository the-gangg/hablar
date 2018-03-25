import * as React from 'react';
import { View, Picker, Text} from 'react-native';

import styles from './styles';

const Language = (props: {}) => (
  <View style={styles.panel}>
    <Text> Entered LanguagePanel </Text>
    <Picker
        selectedValue={this.state.language}
        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
    </Picker>
  </View>
);
 export default Language;
