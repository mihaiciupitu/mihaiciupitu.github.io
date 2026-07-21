//dolarul e shortened query selector

const active = $(".link1");
active.addEventListener("click", function () {
  active.classList.add("active");
  showPage(".home");
});
document.addEventListener("click", function (event) {
  if (event.target != active) active.classList.remove("active");
});
const active2 = $(".link2");
active2.addEventListener("click", function () {
  active2.classList.add("active");
  showPage(".skills");
});
document.addEventListener("click", function (event) {
  if (event.target != active2) active2.classList.remove("active");
});
const active3 = $(".link3");
active3.addEventListener("click", function () {
  active3.classList.add("active");
  showPage(".projects");
});
document.addEventListener("click", function (event) {
  if (event.target != active3) active3.classList.remove("active");
});


const icon = $("#" + "icon");
const imgdark = $(".image");
const logodark = $(".logo");
const logo2dark = $(".logo2");
const logo3dark = $(".logo3");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  imgdark.classList.toggle("image-dark");
  logodark.classList.toggle("logo-dark");
  logo2dark.classList.toggle("logo-dark");
  logo3dark.classList.toggle("logo-dark");

  if (document.body.classList.contains("dark-theme"))
    icon.src = "images/moon.png";
  else icon.src = "images/sun.png";
};

function show(clasa) {
  $(clasa).classList.remove("display");
}
function hide(clasa) {
  $(clasa).classList.add("display");
}
function showPage(clasa) {
  hide(activePage);
  show(clasa);

  activePage = clasa;
}
function $(selector) {
  console.info("gaseste elementul : %o ", selector);
  const el = document.querySelector(selector);
  return el;
}
let activePage = ".home";

// Skills are written directly in index.html now (see .skills-group /
// .skills-list). The old loadSkills()/skills.json fetch was removed: it
// injected "HTML - 10, CSS - 10, JS - 8" into `.skills ul` and would
// overwrite the real skills list the moment a <ul> appeared in that section.

showPage(activePage);
