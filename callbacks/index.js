const fs = require('fs');
const path = require('path');

function person(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

function address() {
    console.log("Bangladesh");
}

person("Khorshed Sadhin", address)

const asyncFilePath = path.join(__dirname, 'index.txt');
fs.readFile(asyncFilePath, 'utf8', (err, data) => {
    if(err) {
        console.error("Error reading file", err);
        return;
    }
    console.log(data);
});
