import { StyleSheet } from 'react-native';

import { Colors, Font } from '../../config/constants';

export default StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.COLOR2,
    alignItems: 'center',
  },
  headerText: {
    fontFamily: Font.HEADER,
    color: Colors.HEADER,
    fontSize: 40,
    alignSelf: 'center',
    marginTop: '3%',
  },
});
