const getLines = require("../helpers/getLines");
const getScenicScores = require("./helpers/getScenicScores");

const inputPath = "./8/input.txt";

const main = async () => {
  const lines = await getLines(inputPath);
  const x = {};
  const y = {};
  for (let i = 0; i < lines.length; ++i) {
    x[i] = lines[i];
    const line = lines[i];
    for (let j = 0; j < line.length; ++j) {
      y[j] = y[j] || "";
      y[j] += line[j];
    }
  }

  return getScenicScores(x, y).sort((a, b) => (a > b ? -1 : 1))[0];
};

main()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
