//dolarul e shortened query selector

var active = $(".link1");
active.addEventListener("click", function () {
  active.classList.add("active");
  showPage(".home");
});
document.addEventListener("click", function (event) {
  if (event.target != active) active.classList.remove("active");
});
var active2 = $(".link2");
active2.addEventListener("click", function () {
  active2.classList.add("active");
  showPage(".skills");
});
document.addEventListener("click", function (event) {
  if (event.target != active2) active2.classList.remove("active");
});
var active3 = $(".link3");
active3.addEventListener("click", function () {
  active3.classList.add("active");
  showPage(".projects");
});
document.addEventListener("click", function (event) {
  if (event.target != active3) active3.classList.remove("active");
});
var active4 = $(".link4");
active4.addEventListener("click", function () {
  active4.classList.add("active");
  showPage(".languages");
});
document.addEventListener("click", function (event) {
  if (event.target != active4) active4.classList.remove("active");
});

var icon = $("#" + "icon");
var imgdark = $(".image");
var logodark = $(".logo");
var logo2dark = $(".logo2");
var logo3dark = $(".logo3");
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
  var el = document.querySelector(selector);
  return el;
}
var activePage = ".home";
function showSkills(skills) {
  var ul = $(".skills ul");

  var text = skills.map(function (skill) {
    var cls = "";
    if (skill.favorite == true) {
      cls = "favorite";
    }
    return `<li class = "${cls}"> ${skill.name} <span> - ${skill.endorsement} </span></li>`;
  });
  ul.innerHTML = text.join("");
}
function loadSkills() {
  var promise = fetch("skills.json");
  console.warn(promise);
  promise.then(function (r) {
    const jsonPromise = r.json();
    jsonPromise.then(function (skills) {
      showSkills(skills);
    });
  });
}

showPage(activePage);
loadSkills();
