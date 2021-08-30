function toggleText() {
  let btn = document.querySelector(".toggle-text-button");
  btn.addEventListener("click", toggleVisibility);
}

function toggleVisibility(event) {
  let divText = document.querySelector("#text");
  divText.hidden = !divText.hidden;
}
