function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } 
  let result = n;
  for (let i = 1; i < n; i++) {
    result = result * (n - i);
  }
  return result;
}
