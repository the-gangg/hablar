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
//example path "conversations/" + conversationKey + "/messages"
function add(objectAdding: any, path: string) {
    var ref = database.ref(path);
    ref.push(objectAdding);
}
// }
//update = {values: object}
function update(update: any, path: string) {
    var ref = database.ref(path);
    ref.update(update);
}