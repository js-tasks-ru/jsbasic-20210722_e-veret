/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.elem = document.createElement("table");
    this.render(rows);

    this.elem.addEventListener("click", this.onclick);
  }

  render(rows) {
    let thead = `<thead><tr>`;
    let tbody = `<tbody>`;
    rows.forEach((element, index) => {
      tbody = tbody + `<tr>`;
      for (let key in element) {
        if (index == 0) {
          thead = thead + `<th>${key}</th>`;
        }

        tbody = tbody + `<td>${element[key]}</td>`;
      }

      tbody = tbody + `<td><button>X</button></td></tr>`;
    });
    thead = thead + `<th></th></tr></thead>`;

    tbody = tbody + `</tbody>`;
    this.elem.innerHTML = thead + tbody;
  }

  onclick = () => {
    if (!event.tagName === "BUTTON") {
      return;
    }
    let current = event.target.closest("tr");
    current.remove();
  };
}
