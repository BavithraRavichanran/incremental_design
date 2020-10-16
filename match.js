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
module.exports = Match ;