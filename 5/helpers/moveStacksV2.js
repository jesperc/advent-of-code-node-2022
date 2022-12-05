const moveStacksV2 = (stacks, instructions) => {
  for (let instruction of instructions) {
    const cratesToPush = []
    for (let i = 0; i < instruction.quantity; ++i) {
      const crate = stacks[instruction.from - 1].pop()
      cratesToPush.push(crate)
    }
    cratesToPush.reverse();
    for (crate of cratesToPush) {
      stacks[instruction.to - 1].push(crate)
    }
  }
  return stacks;
};

module.exports = moveStacksV2;
