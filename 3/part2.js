const getLines = require("../helpers/getLines");
const getHashTable = require("./helpers/getHashTable");
const getPriority = require("./helpers/getPriority");

const inputPath = "./input.txt";

const main = async () => {
  let sumPriority = 0;

  const lines = await getLines(inputPath);
  for (let i = 0; i < lines.length; i += 3) {
    const rucksack1 = lines[i];
    const rucksack2 = lines[i + 1];
    const rucksack3 = lines[i + 2];

    const sortedHashes = [
      getHashTable(rucksack1),
      getHashTable(rucksack2),
      getHashTable(rucksack3),
    ].sort((a, b) => (Object.keys(a).length > Object.keys(b).length ? -1 : 1));

    hash1 = sortedHashes[0];
    hash2 = sortedHashes[1];
    hash3 = sortedHashes[2];

    var keys = Object.keys(hash1);
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

/*
DMwrszrfMzSSCpLpfCCn
RMvhZhQqlvhMvRtbvbcPclPlncddppLTdppd
tVMQhFtjjWmsFJsmsW
*/