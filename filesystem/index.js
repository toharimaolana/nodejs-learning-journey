const fs = require('fs');

const {resolve} = require('path');


// AKSES DENGAN CARA ASYNC
// const fileReadCallBack = (err, data) => {
//     if(err){
//         console.error('Error reading file:', err);
//         return;
//     }
//     console.log('File content:', data);
// }

// fs.readFile(resolve(__dirname, 'users.txt'), 'utf8', fileReadCallBack);

// AKSES DENGAN CARA SYNC
const data = fs.readFileSync(resolve(__dirname, 'users.txt'), 'utf8');
console.log('File content:', data); 