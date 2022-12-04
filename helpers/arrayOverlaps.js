const arrayOverlaps = (array1, array2) => {
  return array1.filter((value) => array2.includes(value)).length > 0;
};

module.exports = arrayOverlaps;
