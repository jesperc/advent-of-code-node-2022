const getLines = require("../helpers/getLines");
const isEmptyOrNewline = require("../helpers/isEmptyOrNewline");
const getHashTable = require("./helpers/getHashTable");
const getPriority = require("./helpers/getPriority");

const inputPath = "./3/input.txt";

const main = async () => {
  let sumPriority = 0;

  const lines = await getLines(inputPath);
  for (let line of lines) {
    const compartment1 = line.substring(0, line.length / 2);
    const compartment2 = line.substring(line.length / 2, line.length);
    const hash1 = getHashTable(compartment1);
    const hash2 = getHashTable(compartment2);

    for (let char of compartment1) {
      if (hash1[char] === hash2[char] && !isEmptyOrNewline(char)) {
        sumPriority += getPriority(char);
        break;
      }
    }
  }

  return sumPriority;
};

main()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
