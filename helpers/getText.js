const fs = require("fs");

const getText = (path) => {
  return fs.readFileSync(path, 'utf8');
};

module.exports = getText;
