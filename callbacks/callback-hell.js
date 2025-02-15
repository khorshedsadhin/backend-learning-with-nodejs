const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.txt');
const outputFilePath = path.join(__dirname, 'output.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
    if(err) {
        console.error("Error reading file", err);
        return;
    }

    const modifyFileData = data.toUpperCase();
    fs.writeFile(outputFilePath, modifyFileData, (err) => {
        if(err) {
            console.error("Error writing file", err);
            return;
        }

        console.log('data written to the new file');

        fs.readFile(outputFilePath, 'utf8', (err, data) => {
            if(err) {
                console.error("Error reading file", err);
                return;
            }

            console.log(data);
        });
    });
});
