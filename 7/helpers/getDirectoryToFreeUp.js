const totalSpace = 70000000;
const updateSpace = 30000000;

const getDirectoryToFreeUp = (directories) => {
  const usedSpace = directories
    .map((dir) => parseInt(dir.size))
    .sort((a, b) => (a > b ? -1 : 1))[0];
  const unusedSpace = totalSpace - usedSpace;
  const neededSpace = updateSpace - unusedSpace;

  currentDir = { path: null, size: totalSpace + 1 };
  for (let dir of directories) {
    if (dir.size > neededSpace && dir.size < currentDir.size) {
      currentDir = dir;
    }
  }
  return currentDir;
};
module.exports = getDirectoryToFreeUp;
