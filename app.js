let bars = document.querySelector(".bars");
let navbar = document.querySelector(".navbar");

// bars.addEventListener(`click`, function () {
//   bars.classList.toggle("active");
//   navbar.classList.toggle("active");
// });
let btn = document.querySelector(`.btn-mdl`);
let inpt = document.querySelector(`.inp-mdl`);
let alrt = document.querySelector(`.alert`);
btn.addEventListener(`click`, function () {
  //   inpt.target = inpt.value;
  alrt.style.display = "block";
});
let cards__btn1 = document.querySelector(`.cards__btn1`);
let cards__btn2 = document.querySelector(`.cards__btn2`);
let cards__btn3 = document.querySelector(`.cards__btn3`);

let cards__text1 = document.querySelector(`.cards__text1`);
let cards__text2 = document.querySelector(`.cards__text2`);
let cards__text3 = document.querySelector(`.cards__text3`);

cards__btn1.addEventListener(`click`, function () {
  cards__text1.textContent = `${5.99 * 12} per year`;
});
cards__btn2.addEventListener(`click`, function () {
  cards__text2.textContent = `${12.99 * 12} per year`;
});
cards__btn3.addEventListener(`click`, function () {
  cards__text3.textContent = `${20.99 * 12} per year`;
});
