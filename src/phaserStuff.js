var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
var game = new Phaser.Game(config);

var heroPiece;
var cursors;

var invincible = false;
var heroSpeed = 0;

function preload() {
    this.load.image('bg', './assets/tiled.png')
    this.load.image('heroPiece', './assets/eva.png')
    this.load.image('blockhead', './assets/blocky.png')
}

function create() {
    cursors = this.input.keyboard.createCursorKeys();

    this.add.image(400, 300, 'bg');

    heroPiece = this.physics.add.sprite(100, 450, 'heroPiece');
    heroPiece.setCollideWorldBounds(true);

    sam.setHeroPiece(heroPiece);
    heroSpeed = sam.speed;

    var that = this;
    createBlockHeads(that, blockHeadArray);
}

function checkBounds(obj){
    if(obj.x > 800 || obj.y > 600 || obj.x < 0 || obj.y < 0){
        return true
    }
    else {
        return false
    }
}

function createBlockHeads(that, blockHeadArray) {
    for (const bh of blockHeadArray) {
        var xPos = Math.floor((Math.random() * 600) + 100);
        var yPos = Math.floor((Math.random() * 500) + 5);

        var tempBh = that.physics.add.sprite(xPos, yPos, 'blockhead');
        bh.setBhPiece(tempBh);
        that.physics.add.collider(heroPiece, tempBh, damage);
    }
}

function damage() {
    if (invincible == false) {
        sam.takeDamage(2);
        setInvincibility();
    }
}

function setInvincibility() {
    let statsDiv = document.getElementById("stats");
    
    
    statsDiv.style.background = "pink";
    
    invincible = true;
    setTimeout(() => {
        statsDiv.style.background = "";
        invincible = false;
    }, 1000);
}


function update(){
    heroSpeed = sam.speed;

    if (cursors.left.isDown)
    {
        heroPiece.setVelocityX(-120 - (100 * heroSpeed));
    }
    else if (cursors.right.isDown)
    {
        heroPiece.setVelocityX(120 + (100 * heroSpeed));
    }
    else if (cursors.down.isDown)
    {
        heroPiece.setVelocityY(120 + (100 * heroSpeed));
    }
    else if (cursors.up.isDown)
    {
        heroPiece.setVelocityY(-120 - (100 * heroSpeed));
    }
    else
    {
        heroPiece.setVelocityX(0);
        heroPiece.setVelocityY(0);
    }
    // if (checkBounds(blockhead)){
    //     blockhead.active = false;
    // }
}