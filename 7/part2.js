const getLines = require("../helpers/getLines");
const executeCommand = require("./helpers/executeCommand");
const getDirectoriesOfMaxSize = require("./helpers/getDirectoriesOfMaxSize");
const getDirectoryToFreeUp = require("./helpers/getDirectoryToFreeUp");

const inputPath = "./7/input.txt";

const main = async () => {
  let path = "";
  const files = [];

  const lines = await getLines(inputPath);
  for (let line of lines) {
    const segments = line.split(" ");
    if (line[0] === "$") {
      const command = {
        name: segments[1],
        param: segments.length > 2 ? segments[2] : null,
      };
      path = executeCommand(command, path);
    } else {
      files.push({
        path,
        name: segments[1],
        isDirectory: segments[0] === "dir",
        size: segments[0],
      });
    }
  }

  const dirs = getDirectoriesOfMaxSize(files, 90000000000);
  return getDirectoryToFreeUp(dirs)
};

main()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
