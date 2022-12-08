const arrayHasNoDuplicates = require("../helpers/arrayHasNoDuplicates.");
const getText = require("../helpers/getText");

const inputPath = "./6/input.txt";

const main = async () => {
  const text = getText(inputPath)
  let lastIndex = 0;
  let lastMarker = []
  let list = []
  for (let i = 0; i < text.length; ++i) {
    list.push(text[i])

    if (i <= 13) {
      continue;
    } else {
      list.shift();
      if (arrayHasNoDuplicates(list)) {
        lastIndex = i
        lastMarker = [...list]
        break
      }
    }
  }

  return lastIndex
};

main()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
