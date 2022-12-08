const getLines = require("../helpers/getLines");
const getVisibleTrees = require("./helpers/getVisibleTrees");

const inputPath = "./8/input.txt";

const main = async () => {
  const lines = await getLines(inputPath);
  const x = {}
  const y = {}
  for (let i = 0; i < lines.length; ++i) {
    x[i] = lines[i]
    const line = lines[i]
    for (let j = 0; j < line.length; ++j) {
      y[j] = y[j] || ""
      y[j] += line[j]
    }
  }

  const surroundingTrees = (Object.keys(x).length * 2) + (Object.keys(y).length * 2) - 4
  return surroundingTrees + getVisibleTrees(x, y)
};

main()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
