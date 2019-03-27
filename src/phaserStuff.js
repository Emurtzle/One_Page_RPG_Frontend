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
var blockhead;
var blockhead1;
var cursors;

var invincible = false;

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

    blockhead = this.physics.add.sprite(200, 100, 'blockhead');
    blockhead1 = this.physics.add.sprite(200, 200, 'blockhead');
    blockhead2 = this.physics.add.sprite(200, 300, 'blockhead');
    blockhead3 = this.physics.add.sprite(200, 400, 'blockhead');
    blockhead4 = this.physics.add.sprite(200, 500, 'blockhead');

    this.physics.add.collider(heroPiece, blockhead, damage);
    this.physics.add.collider(heroPiece, blockhead1, damage);
    this.physics.add.collider(heroPiece, blockhead2, damage);
    this.physics.add.collider(heroPiece, blockhead3, damage);
    this.physics.add.collider(heroPiece, blockhead4, damage);
    


    sam.setHeroPiece(heroPiece);
}

function checkBounds(obj){
    if(obj.x > 800 || obj.y > 600 || obj.x < 0 || obj.y < 0){
        return true
    }
    else {
        return false
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
    
    
    statsDiv.style.background = "red";
    
    invincible = true;
    setTimeout(() => {
        statsDiv.style.background = "";
        invincible = false;
    }, 2000);
}


function update(){
        if (cursors.left.isDown)
    {
        heroPiece.setVelocityX(-120);
    }
    else if (cursors.right.isDown)
    {
        heroPiece.setVelocityX(120);
    }
    else if (cursors.down.isDown)
    {
        heroPiece.setVelocityY(120);
    }
    else if (cursors.up.isDown)
    {
        heroPiece.setVelocityY(-120);
    }
    else
    {
        heroPiece.setVelocityX(0);
        heroPiece.setVelocityY(0);
    }
    if (checkBounds(blockhead)){
        blockhead.active = false;
    }
}