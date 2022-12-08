const isVisible = (str, value) => {
  for (let c of str) {
    if (parseInt(c) >= value) {
      return false;
    }
  }
  return true;
};

const getVisibleTrees = (x, y) => {
  let visibleTrees = 0;
  for (let i = 1; i < Object.keys(y).length - 1; ++i) {
    for (let j = 1; j < Object.keys(x).length - 1; ++j) {
      const left = x[i].substring(0, j);
      const right = x[i].substring(j + 1, x[i].length);
      const top = y[j].substring(0, i);
      const bottom = y[j].substring(i + 1, y[j].length);

      const tree = parseInt(x[i][j]);
      if (
        isVisible(left, tree) ||
        isVisible(right, tree) ||
        isVisible(top, tree) ||
        isVisible(bottom, tree)
      ) {
        ++visibleTrees;
      }
    }
  }
  return visibleTrees;
};

module.exports = getVisibleTrees;
