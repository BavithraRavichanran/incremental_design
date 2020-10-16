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

// function getrandomScore(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }

class Match {
    constructor(target, overs) {
        this.target = target;
        this.overs = overs;
    }

    balls = (overs) => {
        return this.overs * 6;
    }
    // getScore(overs) {
    //     let score = 0;
    //     let totalBalls = this.balls(overs);
    //     for (let i = 0; i < totalBalls; i++) {
    //         let batsmanScore = getrandomScore(0, 7);
    //         let bowlerScore = getrandomScore(0, 7);
    //         console.log("Batsman Score:", batsmanScore)
    //         console.log("Bowler Score:", bowlerScore)
    //         if (batsmanScore === bowlerScore) {
    //             return false;
    //         }
    //         score += batsmanScore;
    //         if (score >= this.target) {
    //             return score;
    //         }
    //     }
    //     return score;
    // }


}

class Player {
    constructor() {
        this.run = 0;
        this.max = 7;
        this.min = 0;
    }
    getRunPerBall() {
        return Math.floor(Math.random() * (this.max - this.min)) + this.min;
    }
    getHitRun() {
        let numbers = [0, 4, 6];
        return numbers[Math.floor(Math.random() * numbers.length)];
    }
}

function getScore(balls, batmansType) {
    let bowlersScore;
    let batsmanScore;
    for (let i = 0; i < balls; i++) {
        let score = 0
        bowlersScore = new Player().getRunPerBall();
        console.log(bowlersScore);
        if (batmansType === 0) {
            batsmanScore = new Player().getRunPerBall();
            console.log(batsmanScore)
        } else if (batmansType == 1) {
            batsmanScore = new Player().getHitRun();
            console.log(batsmanScore);
        } else {
            console.log("Worng");
            return;
        }
        if (batsmanScore === bowlersScore) {
            return 0;
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
        


