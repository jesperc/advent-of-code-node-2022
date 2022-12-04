const arrayIntersects = require("../helpers/arrayIntersects");
const getLines = require("../helpers/getLines");
const getRange = require("../helpers/getRange");
const getCleaningPair = require("./helpers/getCleaningPair");

const inputPath = "./4/input.txt";

const main = async () => {
  const lines = await getLines(inputPath);
  let intersections = 0;
  for (let line of lines) {
    const cleaningPair = getCleaningPair(line);
    const size1 = cleaningPair[1] - cleaningPair[0] + 1;
    const size2 = cleaningPair[3] - cleaningPair[2] + 1;
    const range1 = getRange(size1, cleaningPair[0]);
    const range2 = getRange(size2, cleaningPair[2]);
    if (arrayIntersects(range1, range2)) {
      ++intersections;
    }
  }

  return intersections;
};

main()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
