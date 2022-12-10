const getLines = require("../helpers/getLines");
const moveHead = require("./helpers/moveHead");
const moveKnot = require("./helpers/moveKnot");

const inputPath = "./9/input.txt";

const main = async () => {
  const grid = {
    knots: new Array(2).fill().map(() => ({
      x: 0,
      y: 0,
    })),
    visited: { y0x0: 1 },
  };

  const lines = await getLines(inputPath);
  let count = 0;
  for (let line of lines) {
    const segments = line.split(" ");
    const direction = segments[0];
    const steps = segments[1];
    for (let i = 0; i < steps; ++i) {
      // move knot 0 (head)
      moveHead(grid.knots[0], direction);

      // move knots 1-x
      for (let j = 1; j < grid.knots.length - 1; ++j) {
        moveKnot(grid.knots[j], grid.knots[j - 1]);
      }

      // move knot x (tail)
      const tail = grid.knots[grid.knots.length - 1];
      if (
        moveKnot(tail, grid.knots[grid.knots.length - 2], grid.knots.length - 1)
      ) {
        grid.visited[`y${tail.y}x${tail.x}`] = 1;
      }
    }
  }

  return Object.keys(grid.visited).length;
};

main()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
