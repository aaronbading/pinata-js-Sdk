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

hashToUnpin = 'QmUaqrckDEGUb983UEkLhG8sLmtQ13s72FQ56qqbnLxWKD'

pinata.unpin(hashToUnpin).then((result) => {
    //handle results here
    console.log(result);
}).catch((err) => {
    //handle error here
    console.log(err);
});