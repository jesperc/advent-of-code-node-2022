const getCleaningIndices = (line) => {
  const segments = line.split(",");
  const result = [];
  for (let segment of segments) {
    const range = segment.split("-");
    result.push({
      start: parseInt(range[0]),
      end: parseInt(range[1]),
    });
  }
  return result;
};

module.exports = getCleaningIndices;
