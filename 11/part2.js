const getLines = require("../helpers/getLines");
const isEmptyOrNewline = require("../helpers/isEmptyOrNewline");
const createMonkey = require("./helpers/createMonkey");
const inspect = require("./helpers/inspect");
const parseInstruction = require("./helpers/parseInstruction");

const inputPath = "./11/input.txt";

const main = async () => {
  const monkeys = [];

  // parse lines to get all monkeys
  const lines = await getLines(inputPath);
  let monkey = null;
  for (let line of lines) {
    if (isEmptyOrNewline(line)) {
      monkeys.push(monkey);
      continue;
    }

    if (line.startsWith("Monkey")) {
      monkey = createMonkey();
      continue;
    }

    parseInstruction(monkey, line);
  }
  monkeys.push(monkey);

  let highestSharedDivisible = 1;
  for (let monkey of monkeys) {
    highestSharedDivisible *= monkey.divisible;
  }
  for (let monkey of monkeys) {
    monkey.bored = (input) =>
      input > highestSharedDivisible ? input % highestSharedDivisible : input;
  }

  const rounds = 10000;
  for (let i = 0; i < rounds; ++i) {
    for (let monkey of monkeys) {
      inspect(monkey, monkeys);
    }
  }

  const sortedByInspections = monkeys
    .map((monkey) => monkey.inspections)
    .sort((a, b) => (a > b ? -1 : 1));
  return sortedByInspections[0] * sortedByInspections[1];
};

main()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
