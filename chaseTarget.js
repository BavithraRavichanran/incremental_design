const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    var arr = [];
    var nums = line.split(' ');
    var target = parseInt(nums[0]);
    var overs = parseInt(nums[1]);
    chaseTarget(target);
});

function getrandomScore(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

class Match {
    constructor(target, overs) {
        this.target = target;
        this.overs = overs;
    }

    balls = function getNumberBalls(overs) {
        return overs * 6;
    }
    getScore(overs) {
        let score = 0;
        let totalBalls = this.balls(overs);
        for (let i = 0; i < totalBalls; i++) {
            let batsmanScore = getrandomScore(0, 7);
            let bowlerScore = getrandomScore(0, 7);
            console.log("Batsman Score:", batsmanScore)
            console.log("Bowler Score:", bowlerScore)
            if (batsmanScore === bowlerScore) {
                return false;
            }
            score += batsmanScore;
            if (score >= this.target) {
                return score;
            }
        }
        return score;
    }

}

function chaseTarget(target) {
    let overs = 2;
    let match = new Match(target, overs);

    let scoreForover = match.getScore(overs);
    if (scoreForover >= target) {
        console.log("Batsman won");
    } else {
        console.log("Batsman loss");
    }

}