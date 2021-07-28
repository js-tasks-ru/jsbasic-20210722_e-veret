function isEmpty(obj) {
  for (let prop in obj) {
    return false;
  }
  return true;
}
