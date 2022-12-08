const getDirectoryToFreeUp = (directories) => {
  const sortedDirectories = directories
    .map((dir) => parseInt(dir.size))
    .sort((a, b) => a > b ? -1 : 1)
  const usedSpace = sortedDirectories[0]
  const unusedSpace = 70000000 - usedSpace
  const neededSpace = 30000000 - unusedSpace

  console.log(neededSpace)
  currentDir = { path: "n/a", size: 100000000}
  for (let dir of directories) {
    if (dir.size > neededSpace && dir.size < currentDir.size) {
      currentDir = dir
    }
  }
  return currentDir
}
module.exports = getDirectoryToFreeUp;