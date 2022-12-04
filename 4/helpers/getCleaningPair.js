const getCleaningPair = (line) => {
  const segments = line.split(",");
  const result = [];
  for (let segment of segments) {
    const range = segment.split("-");
    result.push(parseInt(range[0]));
    result.push(parseInt(range[1]));
  }
  return result;
};

module.exports = getCleaningPair;
