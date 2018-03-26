import { StyleSheet } from 'react-native';

import { Colors, Font } from '../../config/constants';

export default StyleSheet.create({
  container: {
    marginTop: 70,
    padding: 10,
    alignItems: 'center',
  },
  formBox: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '85%',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'powderblue',
  },
  formBoxHeader: {
    width: '100%',
    height: 60,
    backgroundColor: Colors.COLOR2,
  },
  formBoxHeaderText: {
    fontFamily: Font.HEADER,
    color: Colors.HEADER,
    fontSize: 45,
    alignSelf: 'center',
  },
  inputElements: {
    width: '100%',
    height: 300,
    backgroundColor: 'white',
  },
  textBox: {
    height: 40,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'black',
    marginTop: 10,
  },
});


