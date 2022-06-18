const fs = require('fs');
require("dotenv").config();
// const json_file = require("./1.json");

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

let raw_data = fs.readFileSync('./1.json');
let parsed_data = JSON.parse(raw_data);
console.log(parsed_data);
//console.log(parsed_data.attributes);

const options = {
    pinataMetadata: {
        name: "This is json format ",
        keyvalues: {
            customKey: 'customValue',
            customKey2: 'customValue2'
        }
    },
    pinataOptions: {
        cidVersion: 0
    }
};
pinata.pinJSONToIPFS(parsed_data, options).then((result) => {
    //handle results here
    console.log(result);
}).catch((err) => {
    //handle error here
    console.log(err);
});
