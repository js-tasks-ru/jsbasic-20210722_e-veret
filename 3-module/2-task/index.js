function filterRange(arr, a, b) {
  if (!Array.isArray(arr)) {
    return;
  }
  return arr.filter((item) => item >= a && item <= b);
}
