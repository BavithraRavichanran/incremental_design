var readline = require('readline');
const Match = require('./match');
const {Player, Bowlers} = require('./player');


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




function getOverallScore(balls, batmansType) {
    let bowlersRun;
    let batsmanRun;
    let score = 0;
    for (let i = 0; i < balls; i++) {
        bowlersRun = new Bowlers().getRun();
        console.log("Bowler",bowlersRun);
        batsmanRun = new Player(batmansType).getRun();
        console.log("Batsman",batsmanRun)
        if (batsmanRun === bowlersRun) {
            return -1;
        }
        if (score >= this.target) {
            return score;
        }
        score += batsmanRun;

    }
    return score;

}

function play(target, overs, batmansType) {
    let match = new Match(target, overs);
    let balls = match.balls(overs);
    let totalScores = getOverallScore(balls, batmansType);
    if (totalScores >= target) {
        console.log("Batsman won");
    } else {
        console.log("Batsman loss");
    }
}



