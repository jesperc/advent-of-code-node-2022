const getLines = require("../helpers/getLines");
const isEmptyOrNewline = require("../helpers/isEmptyOrNewline");
const createMonkey = require("./helpers/createMonkey");
const inspect = require("./helpers/inspect");
const parseInstruction = require("./helpers/parseInstruction");

const inputPath = "./11/input.txt";

const log = (monkeys) => {
  console.log(
    monkeys.map((monkey, index) => ({
      monkey: index,
      items: monkey.items.sort((a, b) => (a > b ? -1 : 1))[0],
      inspections: monkey.inspections,
      //divisible: monkey.divisible,
    }))
  );
};

const main = async () => {
  const monkeys = [];
  let mi = 0;

  // parse lines to get all monkeys
  const lines = await getLines(inputPath);
  let monkey = null;
  for (let line of lines) {
    if (isEmptyOrNewline(line)) {
      monkeys.push(monkey);
      ++mi;
      continue;
    }

    if (line.startsWith("Monkey")) {
      monkey = createMonkey("part2");
      monkey.index = mi;
      continue;
    }

    parseInstruction(monkey, line);
  }
  monkeys.push(monkey);

  const rounds = 20;
  for (let i = 0; i < rounds; ++i) {
    for (let monkey of monkeys) {
      inspect(monkey, monkeys);
    }

    if (i + 1 === 1) {
      console.log("round " + (i + 1));
      log(monkeys);
    } else if (i + 1 === 20) {
      console.log("round " + (i + 1));
      log(monkeys);
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
