const fs = require("fs");
const readline = require("readline");

const getLines = async (path) => {
  const fileStream = fs.createReadStream(path);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const lines = [];
  for await (const line of rl) {
    lines.push(line);
  }

  return lines;
};

module.exports = getLines;
