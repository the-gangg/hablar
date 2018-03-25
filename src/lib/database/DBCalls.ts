import { Database } from './sudobackend';

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

function createUser(user: any) {
    database.add(user, "users/");
}

let message = {
    username: "victurd",
    text: "hello",
    language: "Nigerian",
    key: "-K2ib4H77rj0LYewF7dP",
}
createMessage(message);