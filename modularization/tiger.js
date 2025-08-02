class Tiger{
    constructor(){
        this.strength = Math.floor(Math.random() * 100) + 1;
    }

    growl(){
        return "Roar!";
    }
}

module.exports = Tiger;