function getMinMax(str) {
  let arr = str
    .split(" ")
    .map((item) => (item = Number(item)))
    .filter((item) => !Number.isNaN(item))
    .sort((a, b) => a - b);
  let result = {
    min: arr[0],
    max: arr[arr.length - 1],
  };
  return result;
}
