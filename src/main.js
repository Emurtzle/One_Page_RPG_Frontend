
let body = document.body;

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
var myObstacles = [];

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
           if(this.checkUpper(otherobj) || this.checkLower(otherobj) || this.checkLeft(otherobj) || this.checkRight(otherobj)) { return false}
    //     var myleft = this.x;
    //     var myright = this.x + (this.width);
    //     var mytop = this.y;
    //     var mybottom = this.y + (this.height);
    //     var otherleft = otherobj.x;
    //     var otherright = otherobj.x + (otherobj.width);
    //     var othertop = otherobj.y;
    //     var otherbottom = otherobj.y + (otherobj.height);
    //     var crash = true;
    //     if ((mybottom < othertop) ||
    //     (mytop > otherbottom) ||
    //     (myright < otherleft) ||
    //     (myleft > otherright)) {
    //       crash = false;
    //     }
    //     return crash;
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
    var x, y;
  for (i = 0; i < myObstacles.length; i += 1) {
    if (myGamePiece.crashWith(myObstacles[i])) {
      myGameArea.stop();
      return;
    } 
  }
    myGameArea.clear();
    myGameArea.frameNo += 1;
    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        x = myGameArea.canvas.width;
        minHeight = 20;
        maxHeight = 200;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        minGap = 50;
        maxGap = 200;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        myObstacles.push(new component(10, height, "green", x, 0));
        myObstacles.push(new component(10, x - height - gap, "green", x, height + gap));
      }
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].x += -1;
        myObstacles[i].update();
    }
    myGamePiece.newPos();
    myGamePiece.update();
}

function startGame() {
    myGameArea.start();
    myGamePiece = new component(30, 30, "red", 10, 120);
    myObstacle = new component(10, 200, "green", 300, 120); 
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
