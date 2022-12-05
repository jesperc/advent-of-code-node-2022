const isEmptyOrNewline = require("../../helpers/isEmptyOrNewline");

const getStacks = (lines) => {
  for (let line of lines) {
    for (let i = 0; i < line.length; i += 4) {
      if (isEmptyOrNewline(line[i])) {
        continue
      }

      
    }
  }
  return [1, 2, 3]
};

module.exports = getStacks;

// for each 4 chars, parse [0-2]

/*
[N]     [C]                 [Q]    
[W]     [J] [L]             [J] [V]
[F]     [N] [D]     [L]     [S] [W]
[R] [S] [F] [G]     [R]     [V] [Z]
[Z] [G] [Q] [C]     [W] [C] [F] [G]
[S] [Q] [V] [P] [S] [F] [D] [R] [S]
[M] [P] [R] [Z] [P] [D] [N] [N] [M]
[D] [W] [W] [F] [T] [H] [Z] [W] [R]
 1   2   3   4   5   6   7   8   9 

*/