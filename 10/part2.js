const getLines = require("../helpers/getLines");

const inputPath = "./10/input.txt";

const main = async () => {
  const state = {
    executing: false,
    executionCycleCount: 0,
    command: null,
    commands: [],
    cycles: [1],
    x: 1,
    crt: [],
  };

  // parse lines to get all commands
  const lines = await getLines(inputPath);
  for (let line of lines) {
    const segments = line.split(" ");
    state.commands.push({
      op: segments[0],
      param: parseInt(segments[1]),
    });
  }

  // while there are commands left in commands queue, execute program
  // cycle by cycle
  let cycle = 1;
  while (state.commands.length > 0 || state.executing) {
    // process cycle
    state.cycles[cycle] = state.x;
    if (!state.executing) {
      state.command = state.commands.shift();
      state.executing = true;
    } else {
      ++state.executionCycleCount;
    }

    // update CRT row
    state.crt[cycle - 1] = ".";
    if (Math.abs(state.x - ((cycle - 1) % 40)) <= 1) {
      state.crt[cycle - 1] = "#";
    }

    ++cycle;

    // finish execution
    if (state.command.op === "noop") {
      state.executing = false;
    } else if (state.executionCycleCount >= 1) {
      state.executing = false;
      state.x += state.command.param;
      state.executionCycleCount = 0;
    }
  }

  console.log("\n");
  for (let i = 0; i < 240; i += 40) {
    console.log(state.crt.slice(i, i + 40).join(""));
  }
  return "";
};

main()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
