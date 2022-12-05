const arrayHasOnlyDuplicates = (array) => {
  return new Set(array).size === 1;
};

module.exports = arrayHasOnlyDuplicates;
