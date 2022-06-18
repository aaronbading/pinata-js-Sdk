
const fs = require('fs');
require("dotenv").config();
const yourPinataApiKey = process.env.yourPinataApiKey;
const yourPinataSecretApiKey = process.env.yourPinataSecretApiKey;

const pinataSDK = require('@pinata/sdk'); //npm install --save @pinata/sdk
const pinata = pinataSDK(yourPinataApiKey, yourPinataSecretApiKey);

pinata.testAuthentication().then((result) => {
    //handle successful authentication here
    console.log(result);
}).catch((err) => {
    //handle error here
    console.log(err);
});

const readableStreamForFile = fs.createReadStream('./1.png');
const options = {
    pinataMetadata: {
        name: "MyCustomName",
        keyvalues: {
            customKey: 'customValue',
            customKey2: 'customValue2'
        }
    },
    pinataOptions: {
        cidVersion: 0
    }
};
pinata.pinFileToIPFS(readableStreamForFile, options).then((result) => {
    //handle results here
    console.log(result);
}).catch((err) => {
    //handle error here
    console.log(err);
});
