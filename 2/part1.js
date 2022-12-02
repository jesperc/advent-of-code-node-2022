const getLines = require("../helpers/getLines");
const getScore = require("./helpers/getScore");

const inputPath = "./input.txt";

const getReadableString = (hand) => {
  if (hand === "A" || hand === "X") return "rock";
  if (hand === "B" || hand === "Y") return "paper";
  if (hand === "C" || hand === "Z") return "scissor";
};

const main = async () => {
  const lines = await getLines(inputPath);
  let score = 0;
  for (let line of lines) {
    const segments = line.split(" ");
    const opponentHand = getReadableString(segments[0]);
    const myHand = getReadableString(segments[1]);
    score += getScore(opponentHand, myHand);
  }

  console.log(score);
};

main()
  .then(() => console.log("done!"))
  .catch((error) => console.error(error));
