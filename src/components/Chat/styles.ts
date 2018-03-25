import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    receive: {
        marginTop: 15,
        padding: 10,
        borderBottomWidth: 2,
        alignSelf: 'flex-start',
        backgroundColor: 'skyblue',
        borderRadius: 4,
    },
    sent: {
        marginTop: 15,
        padding: 10,
        borderBottomWidth: 2,
        alignSelf: 'flex-end',
        backgroundColor: 'skyblue',
        borderRadius: 4,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        borderBottomWidth: 2,
    },
    message: {
        fontWeight: 'bold',

    },
    textInput: {
        marginTop: 15,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'skyblue'
    },
    conversation: {
        borderWidth: 1,
        borderRadius: 1,
        paddingBottom: 30,
    }
});
