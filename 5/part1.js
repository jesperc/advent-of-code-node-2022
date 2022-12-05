const getLines = require("../helpers/getLines");
const isEmptyOrNewline = require("../helpers/isEmptyOrNewline");
const getInstructions = require("./helpers/getInstructions");
const parseStacks = require("./helpers/parseStacks");
const moveStacks = require("./helpers/moveStacks");

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

  stacks = parseStacks(stacks)
  stacks = moveStacks(stacks, instructions)
  return stacks
    .map((crates) => crates[crates.length - 1])
    .join("")
};

main()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
