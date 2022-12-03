const getLines = require("../helpers/getLines");
const getMyHand = require("./helpers/getMyHand");
const getScore = require("./helpers/getScore");

const inputPath = "./input.txt";

const getReadableString = (hand) => {
  if (hand === "A") return "rock";
  if (hand === "B") return "paper";
  if (hand === "C") return "scissor";
  if (hand === "X") return "lose";
  if (hand === "Y") return "draw";
  if (hand === "Z") return "win";
};

const main = async () => {
  const lines = await getLines(inputPath);
  let score = 0;
  for (let line of lines) {
    const segments = line.split(" ");
    const opponentHand = getReadableString(segments[0]);
    const howRoundEnds = getReadableString(segments[1]);
    const myHand = getMyHand(opponentHand, howRoundEnds);
    score += getScore(opponentHand, myHand);
  }

  return score;
};

main()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
