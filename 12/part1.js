const getLines = require("../helpers/getLines");
const renderMap = require("./helpers/renderMap");

const inputPath = "./12/input.txt";

const main = async () => {
  const lines = await getLines(inputPath);
  const map = {}
  for (let y = lines.length - 1; y >= 0; --y) {
    const line = lines[Math.abs(y - 4)]
    for (let x = 0; x < line.length; ++x) {
      map[y] = map[y] || {}
      map[y][x] = line[x]
    }
  }

  renderMap(map)

  return 0
};

main()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
