function hideSelf(event) {
  let btn = document.querySelector(".hide-self-button");
  btn.onclick = function (event) {
    if (!event.target.hidden) {
      event.target.hidden = true;
    }
  };
}
