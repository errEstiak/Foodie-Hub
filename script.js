const icons = document.querySelectorAll(".section-1__icon i");

document.querySelector(".menu").addEventListener("click", () => {
  document.querySelectorAll(".target").forEach((item) => {
    item.classList.toggle('visible');
  });
});

let i = 1;

setInterval(() => {
  i++;

  const icon = document.querySelector(".section-1__icon .visible");

  icon.classList.remove("visible");

  if (i > icons.length) {
    icons[0].classList.add("visible");
    i = 1;
  } else {
    icon.nextElementSibling.classList.add("visible");
  }
}, 3000);
