function highlight(table) {
  let status;
  let gender;
  let age;

  let thead = table.tHead.rows[0];
  for (let i = 0; i < thead.cells.length; i++) {
    switch (thead.cells[i].textContent) {
      case "Status":
        status = thead.cells[i].cellIndex;
        break;
      case "Gender":
        gender = thead.cells[i].cellIndex;
        break;
      case "Age":
        age = thead.cells[i].cellIndex;
        break;
    }
  }

  let tbody = table.tBodies[0].rows;

  for (let i = 0; i < tbody.length; i++) {
    let tr = tbody[i];

    for (let j = 0; j < tr.cells.length; j++) {
      let td = tr.cells[j];

      if (td.tagName !== "TD") {
        return;
      }

      if (!td.dataset.available) {
        if (td.cellIndex == status) {
          td.closest("tr").setAttribute("hidden", true);
        }
      }

      if (td.cellIndex == status) {
        if (td.dataset.available == "true") {
          td.closest("tr").classList.add("available");
        } else if (td.dataset.available == "false") {
          td.closest("tr").classList.add("unavailable");
        }
      }

      if (td.cellIndex == gender) {
        if (td.textContent === "m") {
          td.closest("tr").classList.add("male");
        } else if (td.textContent === "f") {
          td.closest("tr").classList.add("female");
        }
      }

      if (td.cellIndex == age && Number(td.textContent) < 18) {
        td.closest("tr").style.textDecoration = "line-through";
      }
    }
  }
}
