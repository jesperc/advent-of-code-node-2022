const getText = require("../helpers/getText");

const inputPath = "./6/input.txt";

const main = async () => {
  const text = getText(inputPath)
  return text;
};

main()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
