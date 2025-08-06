const fs =  require('fs');
const { chunk } = require('lodash');
const path = require('path');

const inputPath = path.resolve(__dirname, 'input.txt');
const outputPath = path.resolve(__dirname, 'output.txt');

const readableStream = fs.createReadStream(inputPath, {
    highWaterMark: 10 // Set the buffer size to 10 bytes
});

const writeableStream = fs.createWriteStream(outputPath);

readableStream.on('data', (chunk) => {
    try {
        process.stdout.write(`[${chunk}}] \n`);
    } catch (error) {
        console.log("Error saat membaca stream:", error);
        
    }
});

readableStream.on('end', () => {
    console.log('Done reading the stream.');
});

