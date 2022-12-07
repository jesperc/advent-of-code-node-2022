const arrayHasNoDuplicates = (array) => {
  return new Set(array).size === array.length
};

module.exports = arrayHasNoDuplicates;
