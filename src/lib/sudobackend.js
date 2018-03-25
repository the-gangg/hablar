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
//update = {values: object}
function update(update, path) {
    var ref = database.ref(path);
    ref.update(update);
}
//path: path to element
//key: the key of the element to remove 
function remove(path, key) {
    var ref = database.ref(path);
    ref.child(key).remove();
}
remove("conversations/" + "-K2ib4H77rj0LYewF7dP" + "/messages" + "-L8PFsyOnqCpf2ztEhWw", "language");
