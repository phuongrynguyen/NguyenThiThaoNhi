const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

const snowflakes = [];

function createSnowflakes(count) {
  for (let i = 0; i < count; i++) {
    snowflakes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 4 + 1,
      speedY: Math.random() * 1 + 0.5,
      speedX: Math.random() * 1 - 0.5,
      opacity: Math.random() * 2.5 + 3.3
    });
  }
}

function drawSnowflakes() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
  ctx.beginPath();

  for (let flake of snowflakes) {
    ctx.moveTo(flake.x, flake.y);
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 22);
  }

  ctx.fill();
  updateSnowflakes();
}

function updateSnowflakes() {
  for (let flake of snowflakes) {
    flake.y += flake.speedY;
    flake.x += flake.speedX;

    if (flake.y > height) {
      flake.y = 0;
      flake.x = Math.random() * width;
    }
  }
}

function loop() {
  drawSnowflakes();
  requestAnimationFrame(loop);
}

window.addEventListener("resize", () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
});

createSnowflakes(150);
loop();



/*const musicBtn = document.getElementById('music-btn');
    const music = document.getElementById('background-music');
    const musicIcon = musicBtn.querySelector('i');

    musicBtn.addEventListener('click', () => {
      if (music.paused) {
        music.play().catch(error => {
          console.error('Lỗi phát nhạc:', error);
        });
        musicIcon.classList.replace('fa-play', 'fa-pause');
        
        console.log("Trình phát nhạc đã được chạy!")
      } else {
        music.pause();
        musicIcon.classList.replace('fa-pause', 'fa-play');
        
        console.log("Trình phát nhạc đã được dừng")
      }
    });

function w(){
  location.href="web.html";
}

*/

document.activeElement('load', function(){
  document.getElementById('mp3').play();
}); 