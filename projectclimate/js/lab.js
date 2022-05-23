// Character Elements
var character = $("#character");

//var map = document.querySelector(".map");
console.log(character);


const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = innerWidth
canvas.height = innerHeight

// Character State
var x = 50
var y = canvas.height / 2

class Player {
  constructor(x, y, color, height, width) {
    this.x = x
    this.y = y
    this.color = color
    this.height = height
    this.width = width
  }
  draw() {
    c.beginPath()
    c.fillStyle = 'blue'
    c.fillRect(this.x, this.y, 50, 75)
  }
}

const player = new Player(x, y)
player.draw()

var ballX = 200;
var ballY = 150;
var ballDX = 0;
var ballDY = 0;

function keyReleased() {
  ballDX = 0;
  ballDY = 0;
}

function draw() {
  background(0, 100, 200);

  ballX += ballDX;
  ballY += ballDY;

  if (keyIsPressed) {

    if (key == "w") {
      ballDY = -1;
      ballDX = 0;
    }

    if (key == "s") {
      ballDY = 1;
      ballDX = 0;
    }

    if (key == "a") {
      ballDX = -1;
      ballDY = 0;
    }

    if (key == "d") {
      ballDX = 1;
      ballDY = 0;
    }
  }

  if (ballX > 400) {
    ballX = 0;
  }

  if (ballX < 0) {
    ballX = 400;
  }

  if (ballY > 300) {
    ballY = 0;
  }

  if (ballX > 400) {
    ballX = 300;
  }
  circle(ballX, ballY, 20);
}

// var held_directions = []; // Arrow Key State
//
// var speed = 1;

// const placeCharacter = () => {
//
// 	var pixelSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--pixel-size'));
//
// 	const held_direction = held_directions[0];
// 	if (held_direction) {
// 		if (held_direction === directions.right) {x += speed;}
// 		if (held_direction === directions.left) {x -= speed;}
// 		if (held_direction === directions.down) {y += speed;}
// 		if (held_direction === directions.up) {y -= speed;}
// 		character.attr("facing", held_direction);
// 	}
// 	character.attr("walking", held_direction ? "true" : "false");
//
// 	//character.style.transform = 'translated3d( ${x*pixelSize}px, ${y*pixelSize}px, 0 )';
// }
//
// // Game Loop
// const step = () => {
// 	placeCharacter();
// 	window.requestAnimationFrame(() => {
// 		step();
// 	})
// }
// step(); // First Step
//
// const directions = {
// 	up: "up",
// 	down: "down",
// 	left: "left",
// 	right: "right",
// }
//
// const keys = {
// 	37: directions.left,
// 	38: directions.up,
// 	39: directions.right,
// 	40: directions.down,
// }
//
// document.addEventListener("keydown", (e) => {
// 	var dir = keys[e.which];
// 	if (dir && held_directions.indexOf(dir) === -1) {
// 		held_directions.unshift(dir)
// 	}
// })
//
// document.addEventListener("keyup", (e) => {
// 	var dir = keys[e.which];
// 	var index = held_directions.indexOf(dir);
// 	if (index > -1) {
// 		held_directions.splice(index, 1)
// 	}
// });
//
// // Adding boundaries to background
// function playerBounds() {
//
// }
