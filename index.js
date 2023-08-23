"use strict";

function stars() {
  const numStar = 100;
  const stars = document.querySelector("#stars");

  let i = 0;
  while (i < numStar) {
    const star = document.createElement("i");
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    const size = Math.random() * 9;
    star.style.left = x + "px";
    star.style.top = y + "px";
    star.style.height = size + "px";
    star.style.width = size + "px";
    star.style.boxShadow = "0px 0px " + (size - 8.5) + "px white";
    const duration = Math.random() * 10;
    star.style.animationDuration = 2 + duration + "s";
    star.style.transition = "all ." + 10 + duration + "s";
    stars.appendChild(star);
    // star.style.zIndex = "5";
    i++;
  }
}
stars();

// generating a random number which will help us to take decision which social media link should be shown
let randomNumber = Math.trunc(Math.random() * 4 + 1);
console.log(randomNumber);

// now let make all social link invisible
const social_Links = document.querySelectorAll(".sociallink");
social_Links.forEach((i) => (i.style.display = "none"));

// now showing only the generated link
document.querySelector(`.link${randomNumber}`).style.display = "flex";
