export default class Scores {
  constructor(playerName, score, index) {
    this.playerName = playerName;
    this.score = score;
    this.index = index;
  }

  addScore() {
    const data = JSON.parse(localStorage.getItem('data')) || [];
    const scoreList = {
      playerName: this.playerName,
      score: this.score,
      index: this.index,
    };
    data.push(scoreList);
    localStorage.setItem('data', JSON.stringify(data));
  }
}
