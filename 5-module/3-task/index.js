function initCarousel() {
  let carousel = document.querySelector(".carousel");
  carousel.querySelector(".carousel__arrow_left").style.display = "none";

  let inner = carousel.querySelector(".carousel__inner");

  let delta = inner.offsetWidth;
  let counter = 1;
  let maxCounter = Array.from(
    inner.querySelectorAll(".carousel__slide")
  ).length;

  carousel.addEventListener("click", function (event) {
    if (!event.target.classList.contains("carousel__arrow")) {
      return;
    }

    if (event.target.classList.contains("carousel__arrow_right")) {
      inner.style.transform = `translateX(-${delta * counter}px)`;

      counter += 1;

      if (counter === maxCounter) {
        event.target.style.display = "none";
      }
      if (counter === 2) {
        carousel.querySelector(".carousel__arrow_left").style.display = "";
      }
    }

    if (event.target.classList.contains("carousel__arrow_left")) {
      inner.style.transform = `translateX(-${delta * (counter - 2)}px)`;

      counter -= 1;

      if (counter === 1) {
        event.target.style.display = "none";
      }
      if (counter === 3) {
        carousel.querySelector(".carousel__arrow_right").style.display = "";
      }
    }
  });
}
