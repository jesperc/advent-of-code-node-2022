const moveStacks = (stacks, instructions) => {
  for (let instruction of instructions) {
    for (let i = 0; i < instruction.quantity; ++i) {
      const crate = stacks[instruction.from - 1].pop()
      stacks[instruction.to - 1].push(crate)
    }
  }
  return stacks;
};

module.exports = moveStacks;
