const getInstructions = (line) => {
  const segments = line.split(" ");
  return {
    quantity: segments[1],
    from: segments[3],
    to: segments[5],
  };
};

module.exports = getInstructions;
