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
export interface Database {
    db: firebase.database.Database;
}
export class Database {
    constructor() {
        this.db = firebase.database();
    }

    //example path "conversations/" + conversationKey + "/messages"
    add(objectAdding: any, path: string) {
        var ref = this.db.ref(path);
        return ref.push(objectAdding).key;
    }
    // }
    //update = {values: object}
    update(update: any, path: string) {
        var ref = this.db.ref(path);
        ref.update(update);
    }

    //path: path to element
    //key: the key of the element to remove 
    remove(path: string, key: string) {
        var ref = this.db.ref(path);
        ref.child(key).remove();
    }


    //Example path: "conversations/-K2ib4H77rj0LYewF7dP/messages/-L8PLyG6zcEOloHWTB4u"
    //or "converstions/{convorsationKey}/messages/{messageKey} to get a message object"
    async getObject(path: string) {
        return this.db.ref(path).once("value").then(function (snapshot: any) {
            //console.log(snapshot.val());
            return snapshot.val();
        }, function (error: any) {
            //console.log("Error: " + error.code);
            //return null;

        });
    }
}
