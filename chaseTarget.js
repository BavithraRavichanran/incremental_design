const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    var arr = [];
    var nums = line.split(' ');
    var target = parseInt(nums[0]);
    chaseTarget(target);
});

function getrandomScore(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function singleOver(target){
    let score = 0;
    for (let i = 0; i < 6; i++) {
        let eachBallScore = getrandomScore(0, 7);
        console.log(eachBallScore)
        score += eachBallScore;
        if (score >= target) {
            return score;
        }
    }
        return score;
}
function chaseTarget(target) {
    let scoreForover = singleOver(target);
    if (scoreForover >= target) {
        console.log("Batsman won");
    } else {
        console.log("Batsman loss");
    }

}