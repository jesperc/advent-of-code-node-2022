const getLines = require("../helpers/getLines");
const isEmptyOrNewline = require("../helpers/isEmptyOrNewline");

const inputPath = "./input.txt";

const main = async () => {
  const lines = await getLines(inputPath);
  const elfWithHighestCalories = {
    index: 0,
    calories: 0,
  };
  let sumCalories = 0;

  for (let i = 0; i < lines.length; ++i) {
    const line = lines[i];
    if (isEmptyOrNewline(line)) {
      if (sumCalories > elfWithHighestCalories.calories) {
        elfWithHighestCalories.calories = sumCalories;
        elfWithHighestCalories.index = i;
      }
      sumCalories = 0;
    } else {
      sumCalories += parseInt(line);
    }
  }

  return elfWithHighestCalories;
};

main()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
