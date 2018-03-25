import { Database } from './sudobackend';
import * as firebase from "firebase";

interface User {
    email: string;
    username: string;
    password: string;
    conversationKey: string;
}

var database = new Database();

async function createMessage(message: any) {
    //console.log(await database.getObject("conversations/" + conversationKey));
    if (await database.getObject("conversations/" + message.key) != null) {
        database.add(message, "conversations/" + message.key + "/messages");
    }
}

function createConversation(conversation: any) {
    database.add(conversation, "conversations/");
}

function createUser(user: User) {
    if (validatePassword(user.password)) {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            //TODO exit if there is an issue
        });
    }
    else {
        return false;
    }
    return true;
}

function logOut() {
    firebase.auth().signOut().then(function () {
        return true;
        // Sign-out successful.
    }).catch(function (error) {
        return false;
        // An error happened.
    });
}

function validatePassword(pass: string) {
    if (pass.length > 5) {
        return true;
    }
    return false;
}