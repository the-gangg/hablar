var translate = require("google-translate-api")

// Creating test users
var user1 = {firstName: 'John', lastName: 'Doe', userID: 12345, userLang: 'nl'};
var user2 = {firstName: 'Jane', lastName: 'Doe', userID: 12346, userLang: 'en'};

// Map to query the user object using the userID key
var userMap = new Map();
userMap.set(user1.userID, user1);
userMap.set(user2.userID, user2);

// When message is created, lang is set to the userID's lang
var message1 = {userID: 12345, text: 'Ik hou van muffins',        messageID: 123, lang: userMap.get(12345).userLang};
var message2 = {userID: 12346, text: 'I spea Dutch',              messageID: 124, lang: userMap.get(12346).userLang};
var message3 = {userID: 12345, text: 'I am speaking English now', messageID: 125, lang: userMap.get(12345).userLang};

// Test Cases
translate(message1.text, {to: user2.userLang}).then(res => {
    console.log();
    console.log("*** TEST 1: Message without any typos ***");
    console.log("Original message: " + message1.text);
    console.log("Message language: " + message1.lang);
    console.log("Sender language: " + userMap.get(message1.userID).uesrLang);
    console.log("API suggested language: " + res.from.language.iso);

    // If there is a typo in the text or suggested corrections
    if (res.from.text.autoCorrected || res.from.text.didYouMean) {
        console.log("Corrected output: " + res.from.text.value);
    } else {
        console.log("Output without corrections: " + res.text);
    }
      console.log("Receiver language: " + user2.userLang);
}).catch(err => {
    console.error(err);
});

translate(message2.text, {to: user1.userLang}).then(res => {
    console.log();
    console.log("*** TEST 2: Message with a typo ***");
    console.log("Original message: " + message2.text);
    console.log("Message language: " + message2.lang);
    console.log("Sender language: " + userMap.get(message2.userID).userLang);
    console.log("API suggested language: " + res.from.language.iso);

    // If there is a typo in the text or suggested corrections
    if (res.from.text.autoCorrected || res.from.text.didYouMean) {
        console.log("Corrected output: " + res.from.text.value);
    } else {
        console.log("Output without corrections: " + res.text);
    }
      console.log("Receiver language: " + user1.userLang);
}).catch(err => {
    console.error(err);
});

translate(message3.text, {to: user2.userLang}).then(res => {
    console.log();
    console.log("*** TEST 3: Speaking with language different from typical ***");
    console.log("Original message: " + message3.text);
    console.log("Message language: " + message3.lang);
    console.log("Sender language: " + userMap.get(message3.userID).userLang);
    console.log("API suggested language: " + res.from.language.iso);

    // If there is a typo in the text or suggested corrections
    if (res.from.text.autoCorrected || res.from.text.didYouMean) {
        console.log("Corrected output: " + res.from.text.value);
    } else {
        console.log("Output without corrections: " + res.text);
    }
    console.log("Receiver language: " + user2.userLang);
}).catch(err => {
    console.error(err);
});
