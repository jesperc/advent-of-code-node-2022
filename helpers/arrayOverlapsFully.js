const arrayOverlapsFully = (array1, array2) => {
  const filteredArray = array1.filter((value) => array2.includes(value));
  const jsonStr = JSON.stringify(filteredArray);
  return jsonStr == JSON.stringify(array1) || jsonStr == JSON.stringify(array2);
};

module.exports = arrayOverlapsFully;
