const isEmptyOrNewline = (str) => {
  return /^\s*$/.test(str);
};

module.exports = isEmptyOrNewline;
