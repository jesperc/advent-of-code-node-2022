const getHashTable = (input) => {
  const hashTable = [];
  for (let char of input) {
    hashTable[char] = 1;
  }
  return hashTable;
};

module.exports = getHashTable;
