export default class Scores {
  constructor(playerName, score, index) {
    this.playerName = playerName;
    this.score = score;
    this.index = index;
  }
  addScore() {
    const scoreList = {
      playerName: this.playerName,
      score: this.score,
      index: this.index,
    };
    data.push(scoreList);
  }
}
