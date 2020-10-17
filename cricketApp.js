var readline = require('readline');
const Match = require('./match');
const { Batsman, Bowler } = require('./player');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    var nums = line.split(' ');
    var target = parseInt(nums[0]);
    var overs = parseInt(nums[1]);
    var batmansType = parseInt(nums[2]);
    var bowlerType = parseInt(nums[3]);
    play(target, overs, batmansType, bowlerType);
});




function getOverallScore(balls, batmansType, bowlerType) {
    let bowlersRun;
    let batsmanRun;
    let wicketBowler = false;
    let tailEnderBatsman = false;
    let score = 0;
    for (let i = 0; i < balls; i++) {
        bowlersRun = new Bowler(bowlerType).getRun();
        // wicketBowler possess 'true' for NormalBowler(geting wickets)
        // 'false' for PartTimeBowler (No wicket )
        wicketBowler = new Bowler(bowlerType).getwicket();
        console.log("Bowler", bowlersRun);

        tailEnderBatsman = new Batsman(batmansType).isTailEndBatsman();
        batsmanRun = new Batsman(batmansType).getRun();

        console.log("Batsman", batsmanRun)
        
        // Normal Bowler
        if (wicketBowler) {
            if (batsmanRun === bowlersRun) { // Others BAtsman (include tail)
                return score;
            } 
            if(tailEnderBatsman){  // TailEndBatsman 
                let oddBowlerRun = (bowlersRun % 2 !== 0 )? 'true': 'false';
                let oddBatsmanRun = (batsmanRun % 2 !== 0 )? 'true': 'false';
                if((oddBatsmanRun && oddBowlerRun ) || (!oddBowlerRun && !oddBatsmanRun)){
                    return score; 
                }
            }
        } else {  // partTime
            continue;
        }

        if (score >= this.target) {
            return score;
        }
        score += batsmanRun;

    }
    return score;

}

function play(target, overs, batmansType, bowlerType) {
    let match = new Match(target, overs);
    let balls = match.balls(overs);
    let totalScores = getOverallScore(balls, batmansType, bowlerType);
    if (totalScores >= target) {
        console.log("Batsman won");
    } else {
        console.log("Batsman loss");
    }
}



