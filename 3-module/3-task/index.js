function camelize(str) {
  let result = [];
  str.split("").forEach((item, index) => {
    if (item === "-") {
      return;
    }
    if (str[index - 1] === "-") {
      item = item.toUpperCase();
    }
    result.push(item);
  });

  return result.join("");
}
