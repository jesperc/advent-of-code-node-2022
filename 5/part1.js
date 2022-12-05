const arrayHasOnlyDuplicates = require("../helpers/arrayHasOnlyDuplicates");
const getLines = require("../helpers/getLines");
const isEmptyOrNewline = require("../helpers/isEmptyOrNewline");
const getInstructions = require("./helpers/getInstructions");
const getStacks = require("./helpers/getStacks");
const getTopCrates = require("./helpers/getTopCrates");
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

  stacks = getStacks(stacks)
  stacks = moveStacks(stacks, instructions)
  const crates = getTopCrates(stacks)
  if (arrayHasOnlyDuplicates(crates)) {
    return crates[0]
  }
};

main()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));