const fs = require('fs');

const readableStream = fs.createReadStream('article.txt', {
    highWaterMark: 10 // Set the buffer size to 10 bytes
});

readableStream.on('readable', () => {
    try{
        process.stdout.write(`[${readableStream.read()}]`);
    }
    catch(err) {
        console.error("Error saat membaca stream:", err);
    }
});


readableStream.on('end', () => {
    console.log('Done');
});