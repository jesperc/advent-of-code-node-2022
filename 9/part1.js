const getLines = require("../helpers/getLines");
const moveHead = require("./helpers/moveHead");
const moveTail = require("./helpers/moveTail");

const inputPath = "./9/input.txt";

const main = async () => {
  const grid = {
    bridge: { 0: { 0: 1 } }, // origo is always visited
    head: {
      x: 0,
      y: 0,
    },
    tail: {
      x: 0,
      y: 0,
    },
  };

  const lines = await getLines(inputPath);
  for (let line of lines) {
    const segments = line.split(" ");
    const direction = segments[0];
    const steps = segments[1];
    for (let i = 0; i < steps; ++i) {
      moveHead(grid, direction);
      if (moveTail(grid)) {
        grid.bridge[grid.tail.y] = grid.bridge[grid.tail.y] || {}
        grid.bridge[grid.tail.y][grid.tail.x] = grid.bridge[grid.tail.y][grid.tail.x] || 0
        ++grid.bridge[grid.tail.y][grid.tail.x];
      }
    }
  }

  let sum = 0;
  const keys = Object.keys(grid.bridge)
  for (let key of keys) {
    sum += Object.keys(grid.bridge[key]).length
  }
  return sum;
};

main()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
