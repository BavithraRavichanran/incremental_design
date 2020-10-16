class Player {
    constructor(type) {
        this.type = type;
        this.run = 0;

    }
    getRun() {
        if (this.type === 0) {
            return new NormalBatsman().getRun();
        } else if (this.type === 1) {
            return new HitBatsman().getRun();
        } else if (this.type === 2) {
            return new DefensiverBatsman().getRun();
        } else {
            console.log("wrong");
            return;
        }
    }

}
class NormalBatsman extends Player {
    getRun (){
        let min = 0;
        let max = 7;
        return Math.floor(Math.random() * (max - min)) + min;
    }
}
class HitBatsman extends Player {
    getRun() {
        console.log("Hit")
        let numbers = [0, 4, 6];
        return numbers[Math.floor(Math.random() * numbers.length)];
    }
}
class Bowlers  {
    constructor() {
        this.max = 7;
        this.min = 0;
    }
    getRun() {
        console.log("bowler");
        return Math.floor(Math.random() * (this.max - this.min)) + this.min;
    }
}
class DefensiverBatsman extends Player {
    getRun() {
        let numbers = [0, 1, 2, 3];
        return numbers[Math.floor(Math.random() * numbers.length)];
    }
}

module.exports = {Player, Bowlers}
