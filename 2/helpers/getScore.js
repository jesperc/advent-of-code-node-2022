// scores
const draw = 3;
const win = 6;
const loss = 0;
const rock = 1;
const paper = 2;
const scissor = 3;

// [opponent][me]
const scoreLut = [];
scoreLut["rock"] = {
  rock: draw + rock,
  paper: win + paper,
  scissor: loss + scissor,
};
scoreLut["paper"] = {
  rock: loss + rock,
  paper: draw + paper,
  scissor: win + scissor,
};
scoreLut["scissor"] = {
  rock: win + rock,
  paper: loss + paper,
  scissor: draw + scissor,
};

const getScore = (opponentHand, myHand) => {
  return scoreLut[opponentHand][myHand];
};

module.exports = getScore;
