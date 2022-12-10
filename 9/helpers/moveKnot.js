const moveKnot = (knot, parentKnot) => {
  let distanceX = Math.abs(parentKnot.x - knot.x);
  let distanceY = Math.abs(parentKnot.y - knot.y);
  if (distanceX <= 1 && distanceY <= 1) {
    return false;
  }

  if (distanceX + distanceY === 2) {
    // move only horizontal/vertical
    if (distanceX === 0) {
      knot.y += Math.sign(parentKnot.y - knot.y);
    } else {
      knot.x += Math.sign(parentKnot.x - knot.x);
    }
  } else {
    // move only diagonally
    knot.x += Math.sign(parentKnot.x - knot.x);
    knot.y += Math.sign(parentKnot.y - knot.y);
  }

  return true;
};

module.exports = moveKnot;
