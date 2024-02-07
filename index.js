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
const active4 = $(".link4");
active4.addEventListener("click", function () {
  active4.classList.add("active");
  showPage(".languages");
});
document.addEventListener("click", function (event) {
  if (event.target != active4) active4.classList.remove("active");
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
  canvas.classList.toggle("logo-dark");
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
function sortSkillsByEndorsement(a, b) {
  console.info("sort ", a, b);

  return b.endorsement - a.endorsement;
}
function sortByName(a, b) {
  return a.name.localeCompare(b.name);
}
function showSkills(skills) {
  //skills.sort(sortSkillsByEndorsement);
  skills.sort(sortByName);
  const ul = $(".skills ul");

  const text = skills.map((skill) => {
    let cls = "";
    if (skill.favorite == true) {
      cls = "favorite";
    }
    return `<li class = "${cls}"> ${skill.name} <span> - ${skill.endorsement} </span></li>`;
  });
  ul.innerHTML = text.join("");
}
function loadSkills() {
  fetch("skills.json").then((r) => {
    r.json().then((skills) => {
      showSkills(skills);
    });
  });
}

showPage(activePage);
loadSkills();
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d"); // CTX MEANS CONTEXT
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
let particleArray;

// get mouse mouse position ///////////////////////////////
let mouse = {
  x: null,
  y: null,
  radius: (canvas.height / 80) * (canvas.width / 80),
};
window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

// create Particle
class Particle {
  constructor(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
    this.speedX = this.directionX;
    this.speedY = this.directionY;
  }
  // create method to draw individual particle
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);

    ctx.fillStyle = "black";
    ctx.fill();
  }

  // check particle position, check mouse position, move the paticle, draw the particle
  update() {
    // check if particle is still within canvas
    if (this.x > canvas.width || this.x < 0) {
      this.directionX = -this.directionX;
      this.speedX = this.directionX;
    }
    if (this.y + this.size > canvas.height || this.y - this.size < 0) {
      this.directionY = -this.directionY;
      this.speedY = this.directionY;
    }
    // check mouse position/particle position - collision detection
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < mouse.radius + this.size) {
      if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
        this.x += 10;
      }
      if (mouse.x > this.x && this.x > this.size * 10) {
        this.x -= 10;
      }
      if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
        this.y += 10;
      }
      if (mouse.y > this.y && this.y > this.size * 10) {
        this.y -= 10;
      }
    }
    // move particle
    this.x += this.directionX;
    this.y += this.directionY;
    // call draw method
    this.draw();
  }
}

// check if particles are close enough to draw line between them
function connect() {
  let opacityValue = 1;
  for (let a = 0; a < particleArray.length; a++) {
    for (let b = a; b < particleArray.length; b++) {
      let distance =
        (particleArray[a].x - particleArray[b].x) *
          (particleArray[a].x - particleArray[b].x) +
        (particleArray[a].y - particleArray[b].y) *
          (particleArray[a].y - particleArray[b].y);
      if (distance < (canvas.width / 7) * (canvas.height / 7)) {
        opacityValue = 1 - distance / 10000;
        ctx.strokeStyle = "rgba(0,0,0," + opacityValue + ")";
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.moveTo(particleArray[a].x, particleArray[a].y);
        ctx.lineTo(particleArray[b].x, particleArray[b].y);
        ctx.stroke();
      }
    }
  }
}

// create particle array
function init() {
  particleArray = [];
  let numberOfParticles = (canvas.height * canvas.width) / 90000;
  for (let i = 0; i < numberOfParticles; i++) {
    let size = Math.random() * 20 + 1;
    let x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2;
    let y = Math.random() * (innerHeight - size * 2 - size * 2) + size * 2;
    let directionX = Math.random() * 2 - 1;
    let directionY = Math.random() * 2 - 1;

    let color = "gold";
    particleArray.push(new Particle(x, y, directionX, directionY, size, color));
  }
}

// create animation loop
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].update();
  }
  connect();
}
init();
animate();

// RESIZE SETTING - empty and refill particle array every time window changes size + change canvas size
window.addEventListener("resize", function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  mouse.radius = (canvas.height / 80) * (canvas.width / 80);
  init();
});
// 2) SET MOUSE POSITION AS UNDEFINED when it leaves canvas//////
window.addEventListener("mouseout", function () {
  mouse.x = undefined;
  mouse.y = undefined;
  console.log("mouseout");
});
