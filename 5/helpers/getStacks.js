const isEmptyOrNewline = require("../../helpers/isEmptyOrNewline");

const getStacks = (lines) => {
  const stacks = []
  for (let line of lines) {
    for (let i = 0; i < line.length; i += 4) {
      if (isEmptyOrNewline(line[i])) {
        continue
      }
      const index = i / 4;
      stacks[index] = stacks[index] || []      
      stacks[index].push(line[i + 1])
    }
  }

  return stacks.map((stack) => stack.reverse())
};

module.exports = getStacks;