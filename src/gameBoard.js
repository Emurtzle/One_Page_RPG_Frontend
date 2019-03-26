class GameBoard {
    constructor(width, height) {

         this.myGameArea = {
            canvas: document.createElement("canvas"),
            hero: {
                component: null,
                heroObj: null
            },
            blockHeadArray: [],
            init : () => {
                this.myGameArea.canvas.width = width;
                this.myGameArea.canvas.height = height;
                this.myGameArea.context = this.myGameArea.canvas.getContext("2d");
                this.myGameArea.interval = null;
                this.myGameArea.frameNo = 0;
                document.body.appendChild(this.myGameArea.canvas)
            },
            clear : () => {
                this.myGameArea.context.clearRect(0, 0, this.myGameArea.canvas.width, this.myGameArea.canvas.height);
            }
        }
    }
    
    init() {
        this.myGameArea.init();
    }

    start() {
        setInterval(this.gameLoop, 20);
    }

    gameLoop() {
        console.log("looping");
        debugger;
        this.myGameArea.clear();
        debugger;
        this.myGameArea.frameNo += 1;
        this.myGameArea.hero.component.newPos();
        this.myGameArea.hero.component.update();
    }

    loadHero(heroObj) {
        this.myGameArea.hero.heroObj = heroObj
        this.myGameArea.hero.component = this.createComponent(30,30, "blue", 100, 100);
        this.myGameArea.hero.component.update();
    }

    loadBlockHead(blockHeadObj) {
        var blockhead = {
            component: this.createComponent(30, 30, "red", 500, 100),
            bj: blockHeadObj
        }
        this.myGameArea.blockHeadArray.push(blockhead)
        blockhead.component.update();
    }

    createComponent(width, height, color, xPos, yPos) {
        var component = {
            width: width,
            height: height,
            color: color,
            x: xPos,
            y: yPos,
            speedX: 0,
            speedY: 0,
            myGameArea: this.myGameArea,
            update: function() {
                var ctx = this.myGameArea.canvas.getContext("2d");
                ctx.fillStyle = color;
                ctx.fillRect(this.x, this.y, this.width, this.height);
            },
            newPos: function() {
                this.x += this.speedX;
                this.y += this.speedY;
            },
            stop: function() {
                this.speedX = 0;
                this.speedY = 0;
            }
        }
        return component;
    }
}