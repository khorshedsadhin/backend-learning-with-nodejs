const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, 'data');

if(!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
    console.log('data folder created');
}

const filePath = path.join(dataFolder, 'example.txt');
// sync way
fs.writeFileSync(filePath, 'Hello from node js');
fs.appendFileSync(filePath, '\nThis is a new line added to that file');

const readContentFromFile = fs.readFileSync(filePath, 'utf8');
console.log('File content: ', readContentFromFile);

// async way
const asyncFilePath = path.join(dataFolder, 'async-example.txt');

fs.writeFile(asyncFilePath, 'Hello, Asynce node js', (err) => {
    if(err) throw err;
    console.log('Async file is created successfully');

    fs.readFile(asyncFilePath, 'utf8', (err, data) => {
        if(err) throw err;
        console.log('Async file content: ', data);

        fs.appendFile(asyncFilePath, '\nThis is another line added', (err) => {
            if(err) throw err;
            console.log('New line added to async file');
        });
    });
});
