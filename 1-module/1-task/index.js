function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let result = n;
    for (i = 1; i < n; i++) {
      result = result * (n - i);
    }
    return result;
  }
}
