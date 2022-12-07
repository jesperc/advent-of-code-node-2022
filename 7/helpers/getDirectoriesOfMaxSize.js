const getDirectoriesOfMaxSize = (files, maxSize) => {
  const uniquePaths = new Set([
    ...files.filter((file) => file.isDirectory).map((file) => file.path),
  ]);
    
    const dirs = []
    for (let path of uniquePaths) {
        const filteredFiles = files.filter((file) => !file.isDirectory && file.path.startsWith(path))
        dirs.push({ 
            path,
            size: filteredFiles.reduce((total, obj) => {
                return total + parseInt(obj.size)
            }, 0)
      })
    }

    return dirs.filter((dir) => dir.size <= maxSize)
};

module.exports = getDirectoriesOfMaxSize;
