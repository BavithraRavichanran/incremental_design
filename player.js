// Batsman
class Batsman {
    constructor(type) {
        this.type = type;
        this.run = 0;

    }
    getRun() {
        if (this.type === 0) {
            this.run=  new NormalBatsman().getRun();
            return this.run;
        } else if (this.type === 1) {
            this.run=  new HitBatsman().getRun();
            return this.run;
        } else if (this.type === 2) { 
            this.run= new DefensiverBatsman().getRun();
            return this.run;
        } else if(this.type === 3){
            this.run= new TailEnderBatsman().getRun();
            return this.run;
        }
        else {
            console.log("wrong");
            return;
        }
    }

}
class NormalBatsman extends Batsman {
    getRun (){
        let min = 0;
        let max = 7;
        return Math.floor(Math.random() * (max - min)) + min;
    }
}
class HitBatsman extends Batsman {
    getRun() {
        let numbers = [0, 4, 6];
        return numbers[Math.floor(Math.random() * numbers.length)];
    }
}


class DefensiverBatsman extends Batsman {
    getRun() {
        let numbers = [0, 1, 2, 3];
        return numbers[Math.floor(Math.random() * numbers.length)];
    }
}
class TailEnderBatsman extends Batsman {
    getRun (){
        let min = 0;
        let max = 7;
        return Math.floor(Math.random() * (max - min)) + min;
    }

}

// Bowler

class Bowler {
    constructor(type) {
        this.max = 7;
        this.min = 0;
        this.type = type;
    }
    
    getRun() {
        return Math.floor(Math.random() * (this.max - this.min)) + this.min;
    }
    getwicket() {
        if(this.type === 0){
            return true;
        } else if(this.type === 1){
            return false;
        }
    }
}

module.exports = {Batsman, Bowler}
