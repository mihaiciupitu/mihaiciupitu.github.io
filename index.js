var active = document.querySelector(".link1");
active.addEventListener("click", function () {
  active.classList.add("active");
  showPage(".home");
});
document.addEventListener("click", function (event) {
  if (event.target != active) active.classList.remove("active");
});
var active2 = document.querySelector(".link2");
active2.addEventListener("click", function () {
  active2.classList.add("active");
  showPage(".skills");
});
document.addEventListener("click", function (event) {
  if (event.target != active2) active2.classList.remove("active");
});
var active3 = document.querySelector(".link3");
active3.addEventListener("click", function () {
  active3.classList.add("active");
  showPage(".projects");
});
document.addEventListener("click", function (event) {
  if (event.target != active3) active3.classList.remove("active");
});
var active4 = document.querySelector(".link4");
active4.addEventListener("click", function () {
  active4.classList.add("active");
  showPage(".languages");
});
document.addEventListener("click", function (event) {
  if (event.target != active4) active4.classList.remove("active");
});

var icon = document.getElementById("icon");
var imgdark = document.querySelector(".image");
var logodark = document.querySelector(".logo");
var logo2dark = document.querySelector(".logo2");
var logo3dark = document.querySelector(".logo3");
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
  document.querySelector(clasa).classList.remove("display");
}
function hide(clasa) {
  document.querySelector(clasa).classList.add("display");
}
function showPage(clasa) {
  hide(activePage);
  show(clasa);

  activePage = clasa;
}

var activePage = ".home";
function showSkills() {
  var ul = document.querySelector(".skills ul");
  var skills = ["HTML ", "CSS ", "JS"];
  var text = skills.map(function (skill) {
    return `<li> ${skill}</li>`;
  });
  ul.innerHTML = text.join("");
}
showPage(activePage);
showSkills();
