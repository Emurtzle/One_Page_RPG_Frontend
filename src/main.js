let upBtn = document.getElementById("up_btn");
let downBtn = document.getElementById("down_btn");
let leftBtn = document.getElementById("left_btn");
let rightBtn = document.getElementById("right_btn");
let body = document.body;

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1280;
        this.canvas.height = 720;
        this.context = this.canvas.getContext("2d");
        this.interval = setInterval(updateGameArea, 20);
        document.body.appendChild(this.canvas)
      },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

var myGamePiece;

function component(width, height, color, x ,y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y
    this.update = function() {
        var ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

function moveUp() {
    myGamePiece.speedY -= 1;
}

function moveDown() {
    myGamePiece.speedY += 1;
}

function moveLeft() {
    myGamePiece.speedX -= 1;
}

function moveRight() {
    myGamePiece.speedX += 1;
}

function stopMove() {
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
  }
  

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();
    myGamePiece.update();
}

function startGame() {
    myGameArea.start();
    myGamePiece = new component(30, 30, "red", 10, 120);
}

body.addEventListener("keydown", (ev) => {
    switch (ev.keyCode) {
        case 87:
            moveUp();
        break;
        case 83:
            moveDown();
        break;
        case 65:
            moveLeft();
        break;
        case 68:
            moveRight();
        break;
    }
})

body.addEventListener("keyup", (ev) => {
    switch (ev.keyCode) {
        case 87:
            stopMove()
        break;
        case 83:
            stopMove()
        break;
        case 65:
            stopMove()
        break;
        case 68:
            stopMove()
        break;
    }
})

startGame();
