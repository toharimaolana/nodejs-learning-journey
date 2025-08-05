const {evenEmitter} = require('events');


const birthdayEventListener = (name) => {
    console.log(`Happy Birthday, ${name}!`);
}

const myEmitter = new evenEmitter();

myEmitter.on('birthday', birthdayEventListener);

myEmitter.emit('birthday', 'Alice');