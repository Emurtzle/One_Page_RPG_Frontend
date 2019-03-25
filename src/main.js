
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

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
  }

var myGamePiece;
var testRect;

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

    this.checkLeft = function(otherobj) {
        var otherleft = otherobj.x;
        var myright = this.x + (this.width);
        var crash = true;
        if(myright < otherleft) {
            crash = false
        }
        return crash;
    }
    this.checkRight = function(otherobj) {
        var otherright = otherobj.x + (otherobj.width);
        var myleft = this.x;
        var crash = true;
        if(myleft > otherright) {
            crash = false
        }
        return crash;
    }
    this.checkUpper = function(otherobj) {
        var othertop = otherobj.y;
        var mybottom = this.y + (this.height);
        var crash = true;
        if(mybottom < othertop) {
            crash = false
        }
        return crash;
    }
    this.checkLower = function(otherobj) {
        var otherbottom = otherobj.y + (otherobj.height);
        var mytop = this.y;
        var crash = true;
        if(mytop > otherbottom) {
            crash = false
        }
        return crash;
    }
}

function moveUp() {
    myGamePiece.speedY -= 2;
}

function moveDown() {
    myGamePiece.speedY += 2;
}

function moveLeft() {
    myGamePiece.speedX -= 2;
}

function moveRight() {
    myGamePiece.speedX += 2;
}

function stopMove() {
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
  }
  

function updateGameArea() {
    if (myGamePiece.crashWith(testRect)) {
    //    console.log("OppMove: ", oppMove);
    //    oppMove();

        if (direction == 0) {
            myGamePiece.y += 10;
        } else if (direction == 1) {
            myGamePiece.y -= 10;
        } else if (direction == 2) {
            myGamePiece.x += 10;
        } else if (direction == 3) {
            myGamePiece.x -= 10;
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
            oppMove = () => {
                moveDown();
            }
            direction = 0;
            moveUp();
        break;
        case 83:
            oppMove = () => {
                moveUp();
            }
            direction = 1;
            moveDown();
        break;
        case 65:
            oppMove = () => {
                moveRight();
            }
            direction = 2;
            moveLeft();
        break;
        case 68:
            oppMove = () => {
                moveLeft();
            }
            direction = 3;
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
