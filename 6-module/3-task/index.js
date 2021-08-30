import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.render();

    this.elem.querySelector(".carousel__arrow_left").style.display = "none";

    let counter = 1;
    let maxCounter = this.slides.length;

    this.elem.addEventListener("click", function (event) {
      if (event.target.classList.contains("carousel__button")) {
        let slide = event.target.closest(".carousel__slide");
        let id = slide.getAttribute("data-id");
        slide.id = id;

        this.dispatchEvent(
          new CustomEvent("product-add", {
            detail: slide.id,
            bubbles: true,
          })
        );
      }

      let inner = this.querySelector(".carousel__inner");
      let delta = inner.offsetWidth;

      if (event.target.classList.contains("carousel__arrow_right")) {
        inner.style.transform = `translateX(-${delta * counter}px)`;
        counter += 1;
        if (counter === maxCounter) {
          event.target.style.display = "none";
        }
        if (counter > 1) {
          this.querySelector(".carousel__arrow_left").style.display = "";
        }
      }

      if (event.target.classList.contains("carousel__arrow_left")) {
        inner.style.transform = `translateX(-${delta * (counter - 2)}px)`;

        counter -= 1;

        if (counter === 1) {
          event.target.style.display = "none";
        }

        if (counter < maxCounter) {
          this.querySelector(".carousel__arrow_right").style.display = "";
        }
      }
    });
  }

  render() {
    let htmlText = `<div class="carousel"> <div class="carousel__arrow carousel__arrow_right">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
  </div>
  <div class="carousel__arrow carousel__arrow_left">
    <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
  </div>
  <div class="carousel__inner">`;

    this.slides.forEach((element) => {
      htmlText =
        htmlText +
        `<div class="carousel__slide" data-id="${element.id}">
        <img src="/assets/images/carousel/${
          element.image
        }" class="carousel__img" alt="slide">
  <div class="carousel__caption">
    <span class="carousel__price">&euro;${element.price.toFixed(2)}</span>
    <div class="carousel__title">${element.name}</div>
    <button type="button" class="carousel__button">
      <img src="/assets/images/icons/plus-icon.svg" alt="icon">
    </button>
  </div>
</div>`;
    });
    htmlText = htmlText + `</div></div>`;
    this.elem = createElement(htmlText);
  }
}
