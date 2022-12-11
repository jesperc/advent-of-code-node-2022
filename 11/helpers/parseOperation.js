const functions = {
  "old*num": (old, num) => old * num,
  "old+num": (old, num) => old + num,
  "old*old": (old) => old * old,
};

const parseOperation = (monkey, segments) => {
  const lhs = segments[3];
  const operator = segments[4];
  const rhs = segments[5];
  const functionStr = `${isNaN(lhs) ? lhs : "num"}${operator}${
    isNaN(rhs) ? rhs : "num"
  }`;

  monkey.operation = (old) => functions[functionStr](old, parseInt(rhs));
};

module.exports = parseOperation;
