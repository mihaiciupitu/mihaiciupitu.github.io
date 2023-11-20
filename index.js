var active = document.querySelector(".link1");
active.addEventListener("click", function () {
  active.classList.add("active");
});
document.addEventListener("click", function (event) {
  if (event.target != active) active.classList.remove("active");
});
var active2 = document.querySelector(".link2");
active2.addEventListener("click", function () {
  active2.classList.add("active");
});
document.addEventListener("click", function (event) {
  if (event.target != active2) active2.classList.remove("active");
});
var active3 = document.querySelector(".link3");
active3.addEventListener("click", function () {
  active3.classList.add("active");
});
document.addEventListener("click", function (event) {
  if (event.target != active3) active3.classList.remove("active");
});
var active4 = document.querySelector(".link4");
active4.addEventListener("click", function () {
  active4.classList.add("active");
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

var display1 = document.querySelector(".link4");
var display2 = document.querySelector(".link3");
var display3 = document.querySelector(".link2");
var display4 = document.querySelector(".link1");
var dis = document.querySelector(".languages");
var dis2 = document.querySelector(".skills");
var dis3 = document.querySelector(".projects");
var dis4 = document.querySelector(".home");
display1.onclick = function () {
  dis.classList.remove("display");
  dis2.classList.add("display");
  dis3.classList.add("display");
  dis4.classList.add("display");
};
display2.onclick = function () {
  dis.classList.add("display");
  dis2.classList.add("display");
  dis3.classList.remove("display");
  dis4.classList.add("display");
};
display3.onclick = function () {
  dis.classList.add("display");
  dis2.classList.remove("display");
  dis3.classList.add("display");
  dis4.classList.add("display");
};
display4.onclick = function () {
  dis.classList.add("display");
  dis2.classList.add("display");
  dis3.classList.add("display");
  dis4.classList.remove("display");
};
