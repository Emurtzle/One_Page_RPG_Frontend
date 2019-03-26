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
                
            }
        }
    }
    
    start() {
        this.myGameArea.init();
    }

    loadHero(heroObj) {
        this.myGameArea.hero.heroObj = heroObj
        this.myGameArea.hero.component = this.createComponent(30,30, "blue", 100, 100);
        this.myGameArea.hero.component.update();
        debugger;
    }

    loadBlockHead(blockHeadObj) {
        var blockhead = {
            component: this.createComponent(30, 30, "red", 500, 100),
            bj: blockHeadObj
        }
        this.myGameArea.blockHeadArray.push(blockhead)
        blockhead.component.update();
    }

    createComponent(width, height, color, x, y) {
        var component = {
            width: width,
            height: height,
            color: color,
            x: x,
            y: y,
            speedX: 0,
            speedY: 0,
            update: () => {
                var ctx = this.myGameArea.canvas.getContext("2d");
                ctx.fillStyle = color;
                ctx.fillRect(x, y, width, height);
            }
        }
        return component;
    }
}