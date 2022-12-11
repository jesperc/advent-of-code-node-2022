const createMonkey = (part) => {
  return {
    items: [],
    inspections: 0,
    divisible: 0,
    bored:
      part === "part1" ? (input) => Math.floor(input / 3) : (input) => input,
    adjustWorryLevel: () => "NOT IMPLEMENTED",
    operation: () => "NOT IMPLEMENTED",
    test: () => "NOT IMPLEMENTED",
    ifTrue: () => "NOT IMPLEMENTED",
    ifFalse: () => "NOT IMPLEMENTED",
  };
};

module.exports = createMonkey;
