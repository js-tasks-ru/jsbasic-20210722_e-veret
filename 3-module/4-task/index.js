function showSalary(users, age) {
  if (!Array.isArray(users)) {
    return;
  }
  let result = [];
  users.forEach((item, index) => {
    if (item.age > age) {
      return;
    }
    result.push(item.name + ", " + item.balance);
  });

  return result.join("\n");
}
