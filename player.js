// Batsman
class Batsman {
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
        } else if(this.type === 3){
            return new TailEnderBatsman().getRun();
        }
        else {
            console.log("wrong");
            return;
        }
    }
    // isOut() {
    //     if(this.type === 3){
    //         return new TailEnderBatsman().isOut();
    //     }
    //     else {
    //         return new NormalBatsman().isOut();

    //     }
    // }
    isTailEndBatsman(){
        return (this.type === 3)? 'true' : 'false';
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
    isOut(){

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
