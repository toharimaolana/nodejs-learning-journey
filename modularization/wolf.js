class  Wolf {
    constructor() {
        this.strength = Math.floor(Math.random() * 100) + 1;
    }

    howl() {
        return "Awoooo!";
    }
}

module.exports = Wolf;