const getRange = (size, start) => {
  return [...Array(size).keys()].map((i) => i + start);
};

module.exports = getRange;
