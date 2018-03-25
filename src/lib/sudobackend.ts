import * as firebase from "firebase";

firebase.initializeApp({
    apiKey: "AIzaSyCaX524VyrMQEeY8OIlMKStuokVeys4pIw",
    authDomain: "hermes-2820.firebaseapp.com",
    databaseURL: "https://hermes-2820.firebaseio.com",
    storageBucket: "hermes-2820.appspot.com"
});


// class message {
//     username: string;
//     text: string;
//     language: string;
// }

// function Hermes() {
console.log("hi");
var database = firebase.database();

function newMessage(message: any, conversationKey: any) {
    var ref = database.ref("conversations/" + conversationKey + "/messages");
    ref.push(message);
}
// }

newMessage({
    username: "Walter",
    text: "bye",
    language: "spanish",
},
    "-K2ib4H77rj0LYewF7dP");

//Example path: "conversations/-K2ib4H77rj0LYewF7dP/messages/-L8PLyG6zcEOloHWTB4u"
//or            "converstions/{convorsationKey}/messages/{messageKey}"
function getObject(path: string) {
    database.ref(path).on("value", function (snapshot: any) {
        console.log(snapshot.val());
    }, function (error: any) {
        console.log("Error: " + error.code);
    });
}


getObject("conversations/-K2ib4H77rj0LYewF7dP/messages/-L8PLyG6zcEOloHWTB4u");
