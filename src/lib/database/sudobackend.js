"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
        return ref.push(objectAdding).key;
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
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.db.ref(path).once("value").then(function (snapshot) {
                        //console.log(snapshot.val());
                        return snapshot.val();
                    }, function (error) {
                        //console.log("Error: " + error.code);
                        //return null;
                    })];
            });
        });
    };
    return Database;
}());
exports.Database = Database;
