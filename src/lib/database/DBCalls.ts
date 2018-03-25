import { Database } from './sudobackend';
import * as firebase from "firebase";

interface User {
    email: string;
    username: string;
    password: string;
    conversationKey: Array<string>;
}

var database = new Database();

async function createMessage(message: any) {
    //console.log(await database.getObject("conversations/" + conversationKey));
    if (await database.getObject("conversations/" + message.key) != null) {
        database.add(message, "conversations/" + message.key + "/messages");
    }
}

function createConversation(conversation: any) {
    const key = database.add(conversation, "conversations/");
    // console.log(conversation);
    for (var i = 0; i < conversation.users.length; i++) {
        console.log("hello" + key);
        console.log(conversation.users[i])
        database.add(key, "users/" + conversation.users[i] + "/conversationKey");
    }
}

async function createUser(user: User) {
    if (validatePassword(user.password)) {
        console.log('got in here');
        //const signedInUser = await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(error.message);
            //TODO exit if there is an issue
        });
    }
    else {
        return false;
    }
    database.add(user, "users");
    // const signedInUser = firebase.auth().currentUser;
    // console.log(signedInUser);
    // if (signedInUser) {
    //     // User is signed in.
    //     console.log("Am I in here????");
    //     database.add({ uid: signedInUser.uid, conversationKey: [] }, "users");
    // } else {
    //     // No user is signed in.
    // }
    return true;
}

function login(objectAdding: any) {
    firebase.auth().signInWithEmailAndPassword(objectAdding.email, objectAdding.password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
}

function logOut() {
    firebase.auth().signOut().then(function () {
        console.log(true);
        // Sign-out successful.
    }).catch(function (error) {
        console.log(false);
        // An error happened.
    });
}

let user = {
    username: "Michh",
    email: "billl@iastate.edu",
    password: "Helllooooo",
    conversationKey: ["hell"],
}

// createUser(user);
//console.log(logOut());

function validatePassword(pass: string) {
    if (pass.length > 5) {
        return true;
    }
    return false;
}

async function findUserByEmail(email: string) {
    console.log(email);
    var res = database.db.ref("users");
    const snapshot = await res.orderByChild('email').equalTo(email).once("value");
    console.log(snapshot.val());
    for (const data in snapshot.val()) {
        return data;
    }
    console.log('This is not an iterable');
    return null;
    // return snapshot.forEach(function (data: any) {
    //     console.log(data.key);
    //     return data.key;
    // });
    // return res.orderByChild('email').equalTo(email).once("value").then(function (snapshot: any) {
    //     console.log(snapshot.val());
    //     return snapshot.forEach(function (data: any) {
    //         console.log(data.key);
    //         return data.key;
    //     });
    // });
}

async function inviteConversation(arr: Array<string>, conversation: any) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        var c = await findUserByEmail(arr[i]);
        if (c != null) {
            conversation.users.push(c);
        }
    }
    createConversation(conversation);
}

var c = {
    users: [],
    message: ["hi"],
    name: "hi"
}

var a = ["millerl@iastate.edu"];
inviteConversation(a, c);