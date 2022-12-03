const upperCaseA = 65;
const upperCaseZ = 90;

const isUpperCase = (str, index) => {
  const code = str.charCodeAt(index);
  return code >= upperCaseA && code <= upperCaseZ;
};

module.exports = isUpperCase;
