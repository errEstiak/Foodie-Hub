const icons = document.querySelectorAll(".section-1__icon i");

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
