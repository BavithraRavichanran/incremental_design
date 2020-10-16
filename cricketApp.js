const readline = require('readline');
// import Match from './Match'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    var arr = [];
    var nums = line.split(' ');
    var target = parseInt(nums[0]);
    var overs = parseInt(nums[1]);
    var batmansType = parseInt(nums[2]);
    play(target, overs, batmansType);
});

class Match {
    constructor(target, overs, player) {
        this.target = target;
        this.overs = overs;
        this.player = player;
    }

    balls = (overs) => {
        return this.overs * 6;
    }
}

class Player {
    constructor(type) {
        this.type = type;
        this.run = 0;
        this.max = 7;
        this.min = 0;
    }
    getRun() {
        if (this.type === 0) {
            return this.getRunPerBall();
        } else if (this.type === 1) {
            return this.getHitRun();
        }else if (this.type === 2) {
            return this.getDefensiveRun();
        } else {
            console.log("wrong");
            return;
        }
    }

    getRunPerBall = () => {
        return Math.floor(Math.random() * (this.max - this.min)) + this.min;
    }
    getHitRun() {
        let numbers = [0, 4, 6];
        return numbers[Math.floor(Math.random() * numbers.length)];
    }
    getDefensiveRun(){
        let numbers = [0, 1,2,3];
        return numbers[Math.floor(Math.random() * numbers.length)];
    }
}

function getScore(balls, batmansType) {
    let bowlersScore;
    let batsmanScore;
    for (let i = 0; i < balls; i++) {
        let score = 0
        bowlersScore = new Player(0).getRun();
        console.log("Bowler",bowlersScore);
        batsmanScore = new Player(batmansType).getRun();
        console.log("Batsman",batsmanScore)
        if (batsmanScore === bowlersScore) {
            return -1;
        }
        if (score >= this.target) {
            return score;
        }
        score += batsmanScore;

    }
    return score;

}

function play(target, overs, batmansType) {
    let match = new Match(target, overs);
    let balls = match.balls(overs);
    let totalScores = getScore(balls, batmansType);
    if (totalScores >= target) {
        console.log("Batsman won");
    } else {
        console.log("Batsman loss");
    }
}



