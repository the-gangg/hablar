import { StyleSheet } from 'react-native';

import { Colors } from '../../config/constants';

export default StyleSheet.create({
  nav: {
    backgroundColor: 'skyblue',
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'row',
  },
  navItem: {
    width: '20%',
  },
  iconStyle: {
    color: Colors.ICON,
    marginTop: '19%',
    alignSelf: 'center',
  }
});