"use strict";
exports.__esModule = true;
var firebase = require("firebase");
firebase.initializeApp({
    apiKey: "AIzaSyCaX524VyrMQEeY8OIlMKStuokVeys4pIw",
    authDomain: "hermes-2820.firebaseapp.com",
    databaseURL: "https://hermes-2820.firebaseio.com",
    storageBucket: "hermes-2820.appspot.com"
});
var Database = /** @class */ (function () {
    function Database() {
        this.db = firebase.database();
    }
    //example path "conversations/" + conversationKey + "/messages"
    Database.prototype.add = function (objectAdding, path) {
        var ref = this.db.ref(path);
        ref.push(objectAdding);
    };
    // }
    //update = {values: object}
    Database.prototype.update = function (update, path) {
        var ref = this.db.ref(path);
        ref.update(update);
    };
    //path: path to element
    //key: the key of the element to remove 
    Database.prototype.remove = function (path, key) {
        var ref = this.db.ref(path);
        ref.child(key).remove();
    };
    //Example path: "conversations/-K2ib4H77rj0LYewF7dP/messages/-L8PLyG6zcEOloHWTB4u"
    //or "converstions/{convorsationKey}/messages/{messageKey} to get a message object"
    Database.prototype.getObject = function (path) {
        this.db.ref(path).on("value", function (snapshot) {
            console.log(snapshot.val());
        }, function (error) {
            console.log("Error: " + error.code);
        });
    };
    return Database;
}());
var database = new Database();
database.add({ username: "Walter", text: "what up?", language: "English" }, "conversations/-K2ib4H77rj0LYewF7dP/messages");
