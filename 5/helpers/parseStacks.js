const isEmptyOrNewline = require("../../helpers/isEmptyOrNewline");

const segment = 4

const parseStacks = (lines) => {
  const stacks = []
  for (let line of lines) {
    for (let i = 0; i < line.length; i += segment) {
      if (isEmptyOrNewline(line[i])) {
        continue
      }
      const index = i / segment;
      stacks[index] = stacks[index] || []      
      stacks[index].push(line[i + 1])
    }
  }

  return stacks.map((stack) => stack.reverse())
};

module.exports = parseStacks;