const lowerCaseA = 97;
const lowerCaseZ = 122;

const isLowerCase = (str, index) => {
  const code = str.charCodeAt(index);
  return code >= lowerCaseA && code <= lowerCaseZ;
};

module.exports = isLowerCase;
