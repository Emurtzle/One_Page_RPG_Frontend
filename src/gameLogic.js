
let body = document.body;
let oppMove;
let direction;

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1280;
        this.canvas.height = 720;
        this.context = this.canvas.getContext("2d");
        this.interval = setInterval(updateGameArea, 20);
        this.frameNo = 0;
        document.body.appendChild(this.canvas)
      },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

var myGamePiece;
var testRect;

function component(width, height, color, x ,y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y
    this.speedX = 0;
    this.speedY = 0;
    this.update = function() {
        var ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    this.moveUp = function() {
        this.speedY -= 2;
    }
    
    this.moveDown = function() {
        this.speedY += 2;
    }
    
    this.moveLeft = function() {
        this.speedX -= 2;
    }
    
    this.moveRight = function() {
        this.speedX += 2;
    }

    this.stopMove = function() {
        this.speedX = 0;
        this.speedY = 0;
    }
    
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) ||
        (mytop > otherbottom) ||
        (myright < otherleft) ||
        (myleft > otherright)) {
        crash = false;
        }
        return crash;
      }
}
  

function updateGameArea() {
    if (myGamePiece.crashWith(testRect)) {
        if (direction == 0) {
            myGamePiece.y += 1;
        } else if (direction == 1) {
            myGamePiece.y -= 1;
        } else if (direction == 2) {
            myGamePiece.x += 1;
        } else if (direction == 3) {
            myGamePiece.x -= 1;
        }

    }

    myGameArea.clear();
    myGameArea.frameNo += 1;
    myGamePiece.newPos();
    testRect.update();
    myGamePiece.update();
}

function startGame() {
    myGameArea.start();
    testRect = new component(250, 100, "magenta", 200 , 200)
    myGamePiece = new component(30, 30, "red", 10, 120);
}

body.addEventListener("keydown", (ev) => {
    switch (ev.keyCode) {
        case 87:
            direction = 0;
            myGamePiece.moveUp();
        break;
        case 83:
            direction = 1;
            myGamePiece.moveDown();
        break;
        case 65:
            direction = 2;
            myGamePiece.moveLeft();
        break;
        case 68:
            direction = 3;
            myGamePiece.moveRight();
        break;
    }
})

body.addEventListener("keyup", (ev) => {
    switch (ev.keyCode) {
        case 87:
            myGamePiece.stopMove();
        break;
        case 83:
            myGamePiece.stopMove();
        break;
        case 65:
            myGamePiece.stopMove();
        break;
        case 68:
            myGamePiece.stopMove();
        break;
    }
})

startGame();
