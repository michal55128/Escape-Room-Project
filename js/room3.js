
let btn = document.getElementById("start");
btn.addEventListener('click', start);
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let speed = 120;
let btnRestart;
let countdown;
width = canvas.width; // width of the canvas
height = canvas.height; // height of the canvas
let head; let k = 1;
// let foodImg = new Image();
// foodImg.src = "../pictures/key1.png";
let foodImg = document.getElementById("food");
let intervalId;

const circles = document.getElementById('circles');

for (let i = 1; i <= 10; i++) {
  const circle = document.createElement('div');
  circle.classList.add('circle');
  circle.id = 'circle' + (i);
  circles.appendChild(circle);
}

let key = document.getElementById("key1");
circles.appendChild(key);
//  circles.append("margin=10px");

// set up game variables
function start() {
  canvas.style.display = "block";
  divC = document.getElementById('circles');
  divC.style.display = "flex";
  btn.style.display = "none";
  let timer1;
  clearInterval(intervalId); // clear any previous interval
  timer();
  let snake = [{ x: 1, y: 0 }];
  let food = { x: Math.floor(Math.random() * 29 + 10), y: Math.floor(Math.random() * 29 + 10) };
  let direction = "right";

  // set up game loop
  function gameLoop() {
    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // move snake
    if (countdown > 0) {
      if (snake[0] && snake[0].x !== undefined && snake[0].y !== undefined) {
        head = { x: snake[0].x, y: snake[0].y };
      }
      if (direction === "right") head.x++;
      if (direction === "left") head.x--;
      if (direction === "up") head.y--;
      if (direction === "down") head.y++;
      snake.unshift(head);
    }

    // check for collision with food
    if (head.x === food.x && head.y === food.y) {
      food = { x: Math.floor(Math.random() * 29 + 10), y: Math.floor(Math.random() * 29 + 10) };
      for (let i = 0; i < 2; i++) {
        snake.push({ x: snake[snake.length - 1].x, y: snake[snake.length - 1].y });
      }
      let currentC = document.getElementById('circle' + k);
      currentC.style.backgroundColor = "green";
      k = k + 1;
      if (k == 11) {
        if (localStorage.getItem("level") < 3)
          localStorage.setItem("level", 3);
          clearInterval(intervalId);
          document.getElementById("circles").style.display = "none";
          document.getElementById("timer").style.display = "none";
          document.getElementById("canvas").style.display = "none";
          document.getElementById("start").style.display = "none";
          document.getElementById("restart").style.display = "none";
          document.getElementById("header").style.display = "none";
          document.getElementById("door").style.display = "inline";
          document.getElementById("arrow").style.display = "inline";
          let audio = new Audio('../צלילים/open.wav');
          audio.play();  
        let o=document.getElementById("arrow").addEventListener("click",function(){   
          window.location.href = "../html/index.html";
    
        })
      }
    } else {
      if (snake.length > 5) {
        snake.pop();
      }
    }

    // check for collision with walls
    if (head.x < 0 || head.x >= 40 || head.y < 0 || head.y >= 40) {
      clearInterval(intervalId);
      lose();
    }

    // check if the snake collides with itself
    for (let i = 1; i < snake.length; i++) {
      if (head.x === snake[i].x && head.y === snake[i].y) {
        clearInterval(intervalId);
        lose();
        return;
      }
    }
    ctx.fillStyle = "rgb(234 204 67)";

    // ctx.fillRect( food.x * width / 40, food.y * height / 40, 10, 12);
    let centerX = food.x * width / 40 + 5;
    let centerY = food.y * height / 40 + 6;
    let radius = 4;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    // ctx.fillRect(snake[i].x * width/40, snake[i].y * height/40, 8, 8);
    // draw snake
    ctx.fillStyle = "green";
    for (let i = 0; i <= snake.length; i++) {
      if (snake[i] && snake[i].x !== undefined && snake[i].y !== undefined) {
        ctx.fillRect(snake[i].x * width / 40, snake[i].y * height / 40, 8, 8);
      }
    }
  }

  // start game loop
  intervalId = setInterval(gameLoop, speed);

  // set up keyboard controls
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight" && direction !== "left") direction = "right";
    if (event.key === "ArrowLeft" && direction !== "right") direction = "left";
    if (event.key === "ArrowUp" && direction !== "down") direction = "up";
    if (event.key === "ArrowDown" && direction !== "up") direction = "down";
  });

}

// function to restart the game
function restartGame() {
  start();
  k = 1;
  btnRestart.style.display = "none";

}
function timer() {
  countdown = 60;
  const timerElement = document.getElementById("timer");
  timer1 = setInterval(() => {
    if (countdown > 0) {
      countdown--;
      timerElement.textContent = countdown;
      if (countdown < 11) {
        timerElement.style.fontSize = '20dvh';
        setTimeout(() => {
          timerElement.style.fontSize = '25dvh';
        }, 500);
      }
    }
    else {
      clearInterval(timer1);
      lose();
      let audio = new Audio('../צלילים/fail.wav');
      audio.play();
    }
  }, 1000);
}

function restart() {
  btnRestart = document.getElementById('restart');
  btnRestart.style.display = "block";
  btnRestart.addEventListener('click', restartGame);
}
function lose() {
  restart();
  clearInterval(timer1);
  for (let i = 1; i <= 10; i++) {
    let currentC = document.getElementById('circle' + i);
    currentC.style.backgroundColor = "white";
  }
}
