const moveHead = (grid, direction) => {
  switch (direction) {
    case "L":
      --grid.head.x;
      break;
    case "R":
      ++grid.head.x;
      break;
    case "U":
      ++grid.head.y;
      break;
    case "D":
      --grid.head.y;
      break;
    default:
      throw "invalid direction";
  }
};

module.exports = moveHead;
