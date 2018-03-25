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
//example path "conversations/" + conversationKey + "/messages"
function add(objectAdding, path) {
    var ref = database.ref(path);
    ref.push(objectAdding);
}
// }
<<<<<<< HEAD
newMessage({
    username: "Walter",
    text: "bye",
    language: "spanish"
}, "-K2ib4H77rj0LYewF7dP");
function getObject(path) {
    database.ref(path).on("value", function (snapshot) {
        console.log(snapshot.val());
    }, function (error) {
        console.log("Error: " + error.code);
    });
}
getObject("conversations/-K2ib4H77rj0LYewF7dP/messages/-L8PLyG6zcEOloHWTB4u");
=======
//update {values: object}
function update(update, path) {
    var ref = database.ref(path);
    ref.update(update);
}
update({ dm: false }, "conversations/" + "-K2ib4H77rj0LYewF7dP");
>>>>>>> be1ede76e36c1075048958f8be765424769942df
