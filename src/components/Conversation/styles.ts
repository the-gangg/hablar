import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    conversationPanel: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 0,
        padding: 5,
        borderColor: '#dddddd',
        borderBottomWidth: 1,
    },
    convoImage: {
        flex: 2,
        padding: 0,
    },
    convoText: {
        flex: 3,
        padding: 5,
    },

    convoUnread: {
        flex: 1,
        padding: 0,
    },

    dot: {
        height: 10,
        width: 10,
        backgroundColor: 'skyblue',
        borderRadius: 12.5,
        //display: inline-block,
    },


});
