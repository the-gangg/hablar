"use strict";
exports.__esModule = true;
var firebase = require("firebase");
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
function newMessage(message, conversationKey) {
    var ref = database.ref("conversations/" + conversationKey + "/messages");
    ref.push(message);
}
// }
newMessage({
    username: "Walter",
    text: "bye",
    language: "spanish"
}, "-K2ib4H77rj0LYewF7dP");
