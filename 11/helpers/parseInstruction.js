const parseOperation = require("./parseOperation");

const starting = "Starting";
const operation = "Operation:";
const test = "Test:";
const _if = "If";

const action = {};
action[starting] = (monkey, segments) => {
  monkey.items = segments.slice(2, segments.length);
  if (monkey.items.length > 1) {
    monkey.items[0] = monkey.items[0].split(",")[0];
  }
  monkey.items = monkey.items.map((item) => parseInt(item));
};

action[operation] = (monkey, segments) => {
  parseOperation(monkey, segments);
};

action[test] = (monkey, segments) => {
  const paramNumber = parseInt(segments[3]);
  monkey.divisible = paramNumber;
  monkey.test = (old, param = paramNumber) => {
    return old % param === 0 ? monkey.ifTrue() : monkey.ifFalse();
  };
};

action[_if] = (monkey, segments) => {
  const paramNumber = parseInt(segments[5]);
  if (segments[1] === "true:") {
    monkey.ifTrue = () => paramNumber;
  } else {
    monkey.ifFalse = () => paramNumber;
  }
};

const parseInstruction = (monkey, line) => {
  line = line.trim();
  const segments = line.split(" ");
  action[segments[0]](monkey, segments);
};

module.exports = parseInstruction;
