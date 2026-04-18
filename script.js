const video = document.getElementById("camera");
const overlay = document.getElementById("overlay");

navigator.mediaDevices.getUserMedia({ video: true })
.then(stream => video.srcObject = stream)
.catch(() => alert("Camera not working"));

function loadExperiment(type) {
  overlay.innerHTML = "";

  if (type === "solar") solarSystem();
  if (type === "heart") heartModel();
  if (type === "circuit") circuit();
}

//////////////////////
// 🌌 SOLAR SYSTEM
//////////////////////
function solarSystem() {
  overlay.innerHTML = `<div id="solar"></div>
  <button onclick="toggleOrbit()">Pause/Resume</button>`;

  let solar = document.getElementById("solar");

  let angle = 0;
  let running = true;

  let interval = setInterval(() => {
    if (!running) return;

    angle += 0.05;
    solar.innerHTML = "";

    // Sun
    solar.innerHTML += `<div style="
      width:50px;height:50px;background:yellow;
      border-radius:50%;position:absolute;"></div>`;

    // Earth orbit
    let x = 100 * Math.cos(angle);
    let y = 100 * Math.sin(angle);

    solar.innerHTML += `<div class="planet" style="
      background:blue;
      transform: translate(${x}px, ${y}px);"></div>`;
  }, 30);

  window.toggleOrbit = () => running = !running;
}

//////////////////////
// ❤️ HEART
//////////////////////
function heartModel() {
  overlay.innerHTML = `
    <div id="heart"></div>
    <br>
    <button onclick="increaseRate()">Increase Heart Rate</button>
  `;

  let rate = 1;

  window.increaseRate = () => {
    rate += 0.3;
    document.getElementById("heart").style.animation =
      `beat ${1/rate}s infinite`;
  };
}

//////////////////////
// ⚡ CIRCUIT
//////////////////////
function circuit() {
  overlay.innerHTML = `
    <div id="bulb"></div>
    <br>
    <button onclick="toggleCircuit()">Switch</button>
  `;

  let on = false;

  window.toggleCircuit = () => {
    on = !on;
    document.getElementById("bulb").style.background =
      on ? "yellow" : "gray";
  };
}

