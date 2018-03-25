import { Database } from './sudobackend';

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
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        //TODO exit if there is an issue
    });
}

const message = {
    username: "victurd",
    text: "hello",
    language: "Nigerian",
    key: "-K2ib4H77rj0LYewF7dP",
}
// createMessage(message);

let user = {
    email: "wseymour@iastate.edu",
    username: "walterino",
    password: "hello",
    conversationKey: "112"
}
createUser(user);

function validatePassword(pass: string) {
    if (pass.length > 5) {
        return true;
    }
    return false;
}