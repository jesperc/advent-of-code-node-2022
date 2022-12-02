const getLines = require("../helpers/getLines");
const isEmptyOrNewline = require("../helpers/isEmptyOrNewline");

const inputPath = "./input.txt";

const main = async () => {
  const lines = await getLines(inputPath);
  const calories = [];
  let sumCalories = 0;

  for (let i = 0; i < lines.length; ++i) {
    const line = lines[i];
    if (isEmptyOrNewline(line)) {
      calories.push(sumCalories);
      sumCalories = 0;
    } else {
      sumCalories += parseInt(line);
    }
  }

  const sortedCalories = calories.sort((a, b) => (a > b ? 1 : -1));
  const length = sortedCalories.length;
  console.log(
    sortedCalories[length - 1] +
      sortedCalories[length - 2] +
      sortedCalories[length - 3]
  );
};

main()
  .then(() => console.log("done!"))
  .catch((error) => console.error(error));
