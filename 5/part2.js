const getLines = require("../helpers/getLines");
const isEmptyOrNewline = require("../helpers/isEmptyOrNewline");
const getInstructions = require("./helpers/getInstructions");
const getStacks = require("./helpers/getStacks");
const moveStacksV2 = require("./helpers/moveStacksV2");

const inputPath = "./5/input.txt";

const main = async () => {
  const instructions = []
  let stacks = []

  const lines = await getLines(inputPath);
  for (let line of lines) {
    if (isEmptyOrNewline()) {
      continue
    }

    if (line.includes("move")) {
      instructions.push(getInstructions(line))
    } else {
      stacks.push(line)
    }
  }

  stacks = getStacks(stacks)
  stacks = moveStacksV2(stacks, instructions)
  return stacks
    .map((crates) => crates[crates.length - 1])
    .join("")
};

main()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));