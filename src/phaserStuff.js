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
var woof;
var heroPiece;
var cursors;
var enemies;

var invincible = false;
var heroSpeed = 0;

function preload() {
    this.load.image('bg', './assets/tiled.png')
    this.load.image('heroPiece', './assets/eva.png')
    this.load.image('blockhead', './assets/blocky.png')

    this.load.audio('oof', './assets/oof.mp3')
    // this.load.audio('blockhit', './assets/blockhit')
}

function create() {
    cursors = this.input.keyboard.createCursorKeys();

    this.add.image(400, 300, 'bg');

    heroPiece = this.physics.add.sprite(100, 450, 'heroPiece');
    heroPiece.setCollideWorldBounds(true);

    sam.setHeroPiece(heroPiece);
    heroSpeed = sam.speed;

    enemies = this.add.group();
    var that = this;
    createBlockHeads(that, blockHeadArray);

    setInterval(() => {
        moveBlockheads();
    }, 500);
    woof = this.sound.add('oof');
}

function createBlockHeads(that, blockHeadArray) {
    for (const bh of blockHeadArray) {
        var xPos = Math.floor((Math.random() * 600) + 100);
        var yPos = Math.floor((Math.random() * 500) + 5);

        var tempBh = that.physics.add.sprite(xPos, yPos, 'blockhead');
        bh.setBhPiece(tempBh);
        enemies.add(tempBh);
        that.physics.add.collider(heroPiece, tempBh, () => {heroDamage(bh)});
        tempBh.setCollideWorldBounds(true);
    }
}

function moveBlockheads() {
    for (const bh of enemies.children.entries) {

        var randMove = Math.floor(Math.random() * 4 + 1);
        
        if (randMove == 1) {
            bh.body.velocity.x = 200;
        } else if (randMove == 2) {
            bh.body.velocity.x = -200;
        } else if (randMove == 3) {
            bh.body.velocity.y = 200;
        } else if (randMove == 4) {
            bh.body.velocity.y = -200;
        }
    }
}

function heroDamage(bh) {
    if (invincible == false) {
        woof.play();
        sam.takeDamage(bh.attack);
        bh.takeDamage(sam.attack);
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

    checkBlockheadDeath();
}

function checkBlockheadDeath() {
    for (let i = 0; i<blockHeadArray.length; i++) {
        if (blockHeadArray[i].isDead()){
            blockHeadArray[i].die();
            // debugger;
            let holder = enemies.children.entries[i];
            holder.destroy();
        }
    }
}