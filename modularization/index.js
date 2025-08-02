const Tiger = require('./tiger');
const Wolf = require('./wolf');

const figt = (tiger, wolf) => {
    if(tiger.strength > wolf.strength){
        tiger.growl();
        return "Tiger wins!";
    }
    if(wolf.strength > tiger.strength){
        wolf.howl();
        return "Wolf wins!";
    }

    return "Wolf and Tiger same strength, it's a draw!";
}

const tiger = new Tiger();
const wolf = new Wolf();

console.log(figt(tiger, wolf));