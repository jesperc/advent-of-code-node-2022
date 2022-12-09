const movePart = (parent, child) => {
  let distanceX = Math.abs(head.x - tail.x)
  let distanceY = Math.abs(head.y - tail.y)
  if (distanceX <= 1 && distanceY <= 1) {
    return false
  }

  if (distanceX + distanceY === 2) {
    // move only horizontal/vertical
    if (distanceX === 0) {
      tail.y += Math.sign(head.y - tail.y)
    } else {
      tail.x += Math.sign(head.x - tail.x)
    }
  } else {
    // move only diagonally
    tail.x += Math.sign(head.x - tail.x)
    tail.y += Math.sign(head.y - tail.y)
  }

  return true  
}

const moveBody = (grid) => {
  const { head, body } = grid;
  for (let i = 1; i < body.length; ++i) {
    movePart(body[i - 1], body[i])
  }
  return false
};

//
//  z w z
// z y y y z
// w y x y w
// z y y y z
//  z w z
//

module.exports = moveBody