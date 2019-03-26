var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            // gravity: { y: 300 },
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

var hero;
var blockhead;
var cursors;

function preload() {
    this.load.image('bg', './assets/floor.png')
    this.load.image('hero', './assets/eva.png')
    this.load.image('blockhead', './assets/blocky.png')
}

function create() {
    cursors = this.input.keyboard.createCursorKeys();

    this.add.image(400, 300, 'bg');

    player = this.physics.add.sprite(100, 450, 'hero');
    player.setCollideWorldBounds(true);
    blockhead = this.physics.add.sprite(200, 450, 'blockhead')
    this.physics.add.collider(player, blockhead);
    this.physics.world.setBoundsCollision(true, true, true, true);

}

function checkBounds(obj){
    if(obj.x > 800 || obj.y > 600){
        return true
    }
    else {
        return false
    }
}

function update(){
        if (cursors.left.isDown)
    {
        player.setVelocityX(-120);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(120);
    }
    else if (cursors.down.isDown)
    {
        player.setVelocityY(120);
    }
    else if (cursors.up.isDown)
    {
        player.setVelocityY(-120);
    }
    else
    {
        player.setVelocityX(0);
        player.setVelocityY(0);
    }
    if (checkBounds(blockhead)){
    blockhead.active = false
    }
}