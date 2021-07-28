function sumSalary(salaries) {
  let sumSalaries = 0;
  let errorNumbers = [NaN, Infinity, -Infinity];
  for (let prop in salaries) {
    if (
      typeof salaries[prop] === "number" &&
      !errorNumbers.includes(salaries[prop])
    ) {
      sumSalaries += salaries[prop];
    }
  }
  return sumSalaries;
}
