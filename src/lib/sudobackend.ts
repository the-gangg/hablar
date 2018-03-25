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

//path: path to element
//key: the key of the element to remove 
function remove(path: string, key: string) {
    var ref = database.ref(path);
    ref.child(key).remove();
}


//Example path: "conversations/-K2ib4H77rj0LYewF7dP/messages/-L8PLyG6zcEOloHWTB4u"
//or            "converstions/{convorsationKey}/messages/{messageKey} to get a message object"
function getObject(path: string) {
    database.ref(path).on("value", function (snapshot: any) {
        console.log(snapshot.val());
    }, function (error: any) {
        console.log("Error: " + error.code);
    });
}