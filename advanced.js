// script.js

// Initialize starfield canvas
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Generate stars
for (let i = 0; i < 200; i++) {
  stars.push({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: Math.random() * 1.5,
    speed: Math.random() * 0.5 + 0.2,
  });
}

// Animate stars
function animateStars() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let star of stars) {
    star.x -= star.speed;
    if (star.x < 0) {
      star.x = window.innerWidth + 1;
      star.y = Math.random() * window.innerHeight;
    }
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
  }
  requestAnimationFrame(animateStars);
}
animateStars();

// Animate celestial bodies
const planet = document.getElementById('planet');
const comet = document.getElementById('comet');

let planetAngle = 0;
let cometX = 0;

function animateCelestial() {
  // Rotate planet around center
  planetAngle += 0.002;
  const radius = 200;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  planet.style.top = `${centerY + radius * Math.sin(planetAngle)}px`;
  planet.style.left = `${centerX + radius * Math.cos(planetAngle)}px`;

  // Move comet across the screen
  cometX += 2;
  if (cometX > window.innerWidth + 50) {
    cometX = -50;
  }
  comet.style.transform = `translateX(${cometX}px) rotate(45deg)`;

  requestAnimationFrame(animateCelestial);
}
animateCelestial();

// Launch spaceship animation
const spaceship = document.getElementById('spaceship');
const launchBtn = document.getElementById('launchBtn');

launchBtn.addEventListener('click', () => {
  // Animate spaceship upwards
  let start = null;
  const duration = 3000; // 3 seconds

  function animateLaunch(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const percent = Math.min(progress / duration, 1);
    const translateY = -percent * (window.innerHeight + 200);
    spaceship.style.transform = `translateY(${translateY}px)`;
    if (percent < 1) {
      requestAnimationFrame(animateLaunch);
    }
  }

  requestAnimationFrame(animateLaunch);
});

// Interactivity for celestial bodies
document.getElementById('planet').addEventListener('click', () => {
  alert('You discovered a Mystic Planet! 🌌');
});

document.getElementById('comet').addEventListener('click', () => {
  alert('Wow! That comet is moving fast! 🚀');
});

// Optional: Add parallax or depth effects
// (Can be added here for more advanced effects)
