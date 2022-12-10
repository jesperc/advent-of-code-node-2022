const moveHead = (knot, direction) => {
  switch (direction) {
    case "L":
      --knot.x;
      break;
    case "R":
      ++knot.x;
      break;
    case "U":
      ++knot.y;
      break;
    case "D":
      --knot.y;
      break;
    default:
      throw "invalid direction";
  }
};

module.exports = moveHead;
