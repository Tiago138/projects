const cards = document.querySelector(".cards");
const cardsItems = document.querySelectorAll(".cards .cards__items");

const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

let counter = 1;
const size = cardsItems[0].clientWidth;

cards.style.transform = `translateX(` + -size * counter + `px)`;

console.log(size);

nextBtn.addEventListener("click", () => {
  if (counter >= cardsItems.length - 1) return;
  cards.style.transition = "transform 0.4s ease-in-out";
  counter++;
  cards.style.transform = `translateX(` + -size * counter + `px)`;
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  cards.style.transition = "transform 0.4s ease-in-out";
  counter--;
  cards.style.transform = `translateX(` + -size * counter + `px)`;
});

cards.addEventListener("transitionend", () => {
  if (cardsItems[counter].id === `last-clone`) {
    cards.style.transition = "none";
    counter = cardsItems.length - 2;
    cards.style.transform = `translateX(` + -size * counter + `px)`;
  }
  if (cardsItems[counter].id === `first-clone`) {
    cards.style.transition = "none";
    counter = cardsItems.length - counter;
    cards.style.transform = `translateX(` + -size * counter + `px)`;
  }
});
