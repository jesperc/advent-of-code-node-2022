const inspect = (monkey, monkeys) => {
  const { items, operation, bored, test } = monkey;

  while (items.length > 0) {
    // monkey picks up first item
    let item = items.shift();
    ++monkey.inspections;

    item = operation(item);
    item = bored(item);

    const index = test(item);
    monkeys[index].items.push(item);
  }
};

module.exports = inspect;
