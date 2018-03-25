import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Link } from 'react-router-native';

import styles from './styles';

const Settings = () => (
  <ScrollView style={styles.settings}>
    <Text style={{ fontSize: 20 }}> User Settings </Text>

    <View style={styles.optionBox}>
      <Text>Name </Text>
    </View>

    <View style={styles.optionBox}>
      <Link
        to="/languagePanel"
        underlayColor='#f0f4f7' >
        <Text>Language: “currLang”</Text>
      </Link>
    </View>

    <View style={styles.optionBox}>
      <Text>Photo </Text>
    </View>

  </ScrollView>
);
export default Settings;
