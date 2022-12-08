const reverseString = require("../../helpers/reverseString");

const getScenicScore = (str, value) => {
  if (str.length === 1) {
    return 1
  }

  let scenicScore = 0
  for (let char of str) {
    ++scenicScore
    if (parseInt(char) >= value) {
      break
    }
  }

  scenicScore = scenicScore === 0 ? 1 : scenicScore
  return scenicScore;
};

const getScenicScores = (x, y) => {
  let scenicScores = [];
  for (let i = 1; i < Object.keys(y).length - 1; ++i) {
    for (let j = 1; j < Object.keys(x).length - 1; ++j) {
      const left = x[i].substring(0, j);
      const right = x[i].substring(j + 1, x[i].length);
      const top = y[j].substring(0, i);
      const bottom = y[j].substring(i + 1, y[j].length);

      const tree = parseInt(x[i][j]);
      scenicScores.push(
        getScenicScore(reverseString(left), tree) *
          getScenicScore(right, tree) *
          getScenicScore(reverseString(top), tree) *
          getScenicScore(bottom, tree)
      );
    }
  }
  return scenicScores;
};

module.exports = getScenicScores;
