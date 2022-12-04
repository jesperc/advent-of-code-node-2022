const arrayIntersects = require("../helpers/arrayIntersects");
const getLines = require("../helpers/getLines");
const getRange = require("../helpers/getRange");
const getCleaningIndices = require("./helpers/getCleaningIndices");

const inputPath = "./4/input.txt";

const main = async () => {
  const lines = await getLines(inputPath);
  let intersections = 0;
  for (let line of lines) {
    const cleaningIndices = getCleaningIndices(line);
    const size1 = cleaningIndices[0].end - cleaningIndices[0].start + 1;
    const size2 = cleaningIndices[1].end - cleaningIndices[1].start + 1;
    const range1 = getRange(size1, cleaningIndices[0].start);
    const range2 = getRange(size2, cleaningIndices[1].start);
    if (arrayIntersects(range1, range2)) {
      ++intersections;
    }
  }

  return intersections;
};

main()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
