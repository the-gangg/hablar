import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    nav: {
        flexDirection: 'row',
        // justifyContent: 'flex-end',
        alignSelf: "baseline",
        position: 'absolute',
        borderBottomWidth: 4,
        alignItems: "flex-end",
        top: '100%'
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    subNavItem: {
        padding: 5,
    },
})