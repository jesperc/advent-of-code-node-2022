// [opponent][me]
const handLut = [];
handLut["rock"] = {
  lose: "scissor",
  draw: "rock",
  win: "paper",
};
handLut["paper"] = {
  lose: "rock",
  draw: "paper",
  win: "scissor",
};
handLut["scissor"] = {
  lose: "paper",
  draw: "scissor",
  win: "rock",
};

const getMyHand = (opponentHand, howRoundEnds) => {
  return handLut[opponentHand][howRoundEnds];
};

module.exports = getMyHand;
