class DecisionPending {
    constructor(bowlerRun, batsmanRun, batsmanType) {
        this.batsmanRun = batsmanRun,
            this.bowlerRun = bowlerRun,
            this.batsmanType = batsmanType
    }

    isOut() {
        if(this.batsmanRun === this.bowlersRun) 
        return true; // Others BAtsman (include tail)

        if (this.batsmanType === 3) {
            let oddBowlerRun = (this.bowlersRun % 2 !== 0) ? 'true' : 'false';
            let oddBatsmanRun = (this.batsmanRun % 2 !== 0) ? 'true' : 'false';
            if ((oddBatsmanRun && oddBowlerRun) || (!oddBowlerRun && !oddBatsmanRun)) {
                return true;
            }
        }
        return false;

    }
}
module.exports = DecisionPending;