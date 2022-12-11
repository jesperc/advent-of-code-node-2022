const inspect = (monkey, monkeys) => {
  const { items, operation, divisible, bored, test } = monkey;
  //console.log("divisible: " + divisible);

  while (items.length > 0) {
    // monkey picks up first item
    let item = items.shift();
    ++monkey.inspections;

    item = operation(item);
    item = bored(item);

    // 2,4,3,6
    // 99, 97, 8, 103

    const index = test(item);
    monkeys[index].items.push(item);
  }
};

module.exports = inspect;
