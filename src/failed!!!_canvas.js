class Canvas {
    constructor(width, height) {

        this.gameLoop = this.gameLoop.bind(this)
        
        this.myGameArea = {
            canvas : document.createElement("canvas"),
            init : function() {
                this.canvas.width = width;
                this.canvas.height = height;
                this.context = this.canvas.getContext("2d");
                this.interval = null;
                this.frameNo = 0;
                document.body.appendChild(this.canvas)
              },
            start : (fn) => {
                this.interval = setInterval(fn, 20);
            },
            clear : function() {
                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            }
        }
        this.hero = {
            component: null,
            heroObj: null
        };

        this.blockHeadsArray = [];
    }

    loadHero(heroObj) {
        this.hero.heroObj = heroObj;
        this.hero.component = this.createComponent(30, 30, "black", 10, 120, this.myGameArea.context);
    }

    loadBlockhead() {

    }

    gameLoop() {
        // console.log("Made it");
        debugger;
        this.canvas.myGameArea.clear();
        this.canvas.myGameArea.frameNo += 1;
        this.canvas.hero.component.update();
    }

    startGame() {
        this.myGameArea.init();
        this.myGameArea.start(this.gameLoop);
    }

    createComponent(width, height, color, x ,y, context) {
        var component = {
            width: width,
            height: height,
            color: color,
            x: x,
            y: y,
            speedX: 0,
            speedY: 0,
            update: function() {
                debugger;
                var ctx = context;
                ctx.fillStyle = color;
                ctx.fillRect(this.x, this.y, this.width, this.height);
            },
            newPos: function() {
                this.x += this.speedX;
                this.y += this.speedY;
            },
    
            moveUp: function() {
                this.speedY -= 2;
            },
            
            moveDown: function() {
                this.speedY += 2;
            },
            
            moveLeft: function() {
                this.speedX -= 2;
            },
        
            moveRight: function() {
                this.speedX += 2;
            },
        
            stopMove: function() {
                this.speedX = 0;
                this.speedY = 0;
            },
        
            crashWith: function(otherobj) {
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
        return component;
    }

}