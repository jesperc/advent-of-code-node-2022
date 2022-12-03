const getLines = require("../helpers/getLines");
const getHashTable = require("./helpers/getHashTable");
const getPriority = require("./helpers/getPriority");

const inputPath = "./3/input.txt";

const main = async () => {
  let sumPriority = 0;

  const lines = await getLines(inputPath);
  for (let i = 0; i < lines.length; i += 3) {
    const sortedHashes = [
      getHashTable(lines[i]),
      getHashTable(lines[i + 1]),
      getHashTable(lines[i + 2]),
    ].sort((a, b) => (Object.keys(a).length > Object.keys(b).length ? -1 : 1));

    hash1 = sortedHashes[0];
    hash2 = sortedHashes[1];
    hash3 = sortedHashes[2];

    const keys = Object.keys(hash1);
    for (char of keys) {
      if (hash1[char] === hash2[char] && hash1[char] === hash3[char]) {
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
