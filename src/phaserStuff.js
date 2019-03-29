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
var nice;
var heroPiece;
var cursors;
var enemies;
var healtex;
var vortexAnim;
var them;
var music;
var killBlockheadSound;
let heroName = document.getElementById('name')
var statsDiv = document.getElementById("stats");
var lBar = document.getElementById('level')
var progBar = document.styleSheets[0].cssRules[1].style.width
var leveler = document.getElementById('levelup')

var tempBlockheadArray;

var invincible = false;
var canHeal = true;
var audioSlower = 0;
var progPercentage = 0;
var heroSpeed = 0;
var frozen = false;

function preload() {
    this.load.image('bg', './assets/tiled.png')
    this.load.image('heroPiece', './assets/eva.png')
    this.load.image('blockhead', './assets/blocky.png')
    this.load.audio('oof', './assets/oof.mp3')
    this.load.audio('nice', './assets/nice.mp3')
    this.load.image('iceboi', './assets/zero.png')
    this.load.image('boss', './assets/bigBaddie.png');

    this.load.audio('despacito', './assets/despacito.mp3')
    this.load.audio('yeahboi', './assets/yeahboi.mp3')

    this.load.image('healtex0', './assets/spritesheet-0.png')
    this.load.image('healtex1', './assets/spritesheet-1.png')
    this.load.image('healtex2', './assets/spritesheet-2.png')
    this.load.image('healtex3', './assets/spritesheet-3.png')
    this.load.image('healtex4', './assets/spritesheet-4.png')
    this.load.image('healtex5', './assets/spritesheet-5.png')
    this.load.image('healtex6', './assets/spritesheet-6.png')
    this.load.image('healtex7', './assets/spritesheet-7.png')
    this.load.image('healtex8', './assets/spritesheet-8.png')
    this.load.image('healtex9', './assets/spritesheet-9.png')
    this.load.image('healtex10', './assets/spritesheet-10.png')
    this.load.image('healtex11', './assets/spritesheet-11.png')
    this.load.image('healtex12', './assets/spritesheet-12.png')
    this.load.image('healtex13', './assets/spritesheet-13.png')
    this.load.image('healtex14', './assets/spritesheet-14.png')
    this.load.image('healtex15', './assets/spritesheet-15.png')
    this.load.image('healtex16', './assets/spritesheet-16.png')
    this.load.image('healtex17', './assets/spritesheet-17.png')
    this.load.image('healtex18', './assets/spritesheet-18.png')
    this.load.image('healtex19', './assets/spritesheet-19.png')
    this.load.image('healtex20', './assets/spritesheet-20.png')
    this.load.image('healtex21', './assets/spritesheet-21.png')
    this.load.image('healtex22', './assets/spritesheet-22.png')
    this.load.image('healtex23', './assets/spritesheet-23.png')
    this.load.image('healtex24', './assets/spritesheet-24.png')
    this.load.image('healtex25', './assets/spritesheet-25.png')
    this.load.image('healtex26', './assets/spritesheet-26.png')
    this.load.image('healtex27', './assets/spritesheet-27.png')
    this.load.image('healtex28', './assets/spritesheet-28.png')
    this.load.image('healtex29', './assets/spritesheet-29.png')
    this.load.image('healtex30', './assets/spritesheet-30.png')
    this.load.image('healtex31', './assets/spritesheet-31.png')
    this.load.image('healtex32', './assets/spritesheet-32.png')
    this.load.image('healtex33', './assets/spritesheet-33.png')
    this.load.image('healtex34', './assets/spritesheet-34.png')
    this.load.image('healtex35', './assets/spritesheet-35.png')
    this.load.image('healtex36', './assets/spritesheet-36.png')
    this.load.image('healtex37', './assets/spritesheet-37.png')
    this.load.image('healtex38', './assets/spritesheet-38.png')
    this.load.image('healtex39', './assets/spritesheet-39.png')
    this.load.image('healtex40', './assets/spritesheet-40.png')
    this.load.image('healtex41', './assets/spritesheet-41.png')
    this.load.image('healtex42', './assets/spritesheet-42.png')
    this.load.image('healtex43', './assets/spritesheet-43.png')
    this.load.image('healtex44', './assets/spritesheet-44.png')
    this.load.image('healtex45', './assets/spritesheet-45.png')
    this.load.image('healtex46', './assets/spritesheet-46.png')
    this.load.image('healtex47', './assets/spritesheet-47.png')
    this.load.image('healtex48', './assets/spritesheet-48.png')
    this.load.image('healtex49', './assets/spritesheet-49.png')
    this.load.image('healtex50', './assets/spritesheet-50.png')
    this.load.image('healtex51', './assets/spritesheet-51.png')
    this.load.image('healtex52', './assets/spritesheet-52.png')
    this.load.image('healtex53', './assets/spritesheet-53.png')
    this.load.image('healtex54', './assets/spritesheet-54.png')
    this.load.image('healtex55', './assets/spritesheet-55.png')
    this.load.image('healtex56', './assets/spritesheet-56.png')
    this.load.image('healtex57', './assets/spritesheet-57.png')
    this.load.image('healtex58', './assets/spritesheet-58.png')
    this.load.image('healtex59', './assets/spritesheet-59.png')
    this.load.image('healtex60', './assets/spritesheet-60.png')
    this.load.image('healtex61', './assets/spritesheet-61.png')
    this.load.image('healtex62', './assets/spritesheet-62.png')
    this.load.image('healtex63', './assets/spritesheet-63.png')
    this.load.image('healtex64', './assets/spritesheet-64.png')
    this.load.image('healtex65', './assets/spritesheet-65.png')
    this.load.image('healtex66', './assets/spritesheet-66.png')
    this.load.image('healtex67', './assets/spritesheet-67.png')
    this.load.image('healtex68', './assets/spritesheet-68.png')
    this.load.image('healtex69', './assets/spritesheet-69.png')
    this.load.image('healtex70', './assets/spritesheet-70.png')
    this.load.image('healtex71', './assets/spritesheet-71.png')
    this.load.image('healtex72', './assets/spritesheet-72.png')
    this.load.image('healtex73', './assets/spritesheet-73.png')
    this.load.image('healtex74', './assets/spritesheet-74.png')
    this.load.image('healtex75', './assets/spritesheet-75.png')
    this.load.image('healtex76', './assets/spritesheet-76.png')
    this.load.image('healtex77', './assets/spritesheet-77.png')
    this.load.image('healtex78', './assets/spritesheet-78.png')
    this.load.image('healtex79', './assets/spritesheet-79.png')
    this.load.image('healtex80', './assets/spritesheet-80.png')
    this.load.image('healtex81', './assets/spritesheet-81.png')
    this.load.image('healtex82', './assets/spritesheet-82.png')
    this.load.image('healtex83', './assets/spritesheet-83.png')
    this.load.image('healtex84', './assets/spritesheet-84.png')
    this.load.image('healtex85', './assets/spritesheet-85.png')
    this.load.image('healtex86', './assets/spritesheet-86.png')
    this.load.image('healtex87', './assets/spritesheet-87.png')
    this.load.image('healtex88', './assets/spritesheet-88.png')
    this.load.image('healtex89', './assets/spritesheet-89.png')
    this.load.image('healtex90', './assets/spritesheet-90.png')
}

function create() {
    cursors = this.input.keyboard.createCursorKeys();

    this.add.image(400, 300, 'bg');

    them = this;

    killBlockheadSound = this.sound.add('yeahboi');

    music = this.sound.add('despacito');
    music.play();
    music.setLoop(true);

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
    nice = this.sound.add('nice');

    this.anims.create({
        key: 'healFactor',
        frames: [
            {key: 'healtex0'},
            {key: 'healtex1'},
            {key: 'healtex2'},
            {key: 'healtex3'},
            {key: 'healtex4'},
            {key: 'healtex5'},
            {key: 'healtex6'},
            {key: 'healtex7'},
            {key: 'healtex8'},
            {key: 'healtex9'},
            {key: 'healtex10'},
            {key: 'healtex11'},
            {key: 'healtex12'},
            {key: 'healtex13'},
            {key: 'healtex14'},
            {key: 'healtex15'},
            {key: 'healtex16'},
            {key: 'healtex17'},
            {key: 'healtex18'},
            {key: 'healtex19'},
            {key: 'healtex20'},
            {key: 'healtex21'},
            {key: 'healtex22'},
            {key: 'healtex23'},
            {key: 'healtex24'},
            {key: 'healtex25'},
            {key: 'healtex26'},
            {key: 'healtex27'},
            {key: 'healtex28'},
            {key: 'healtex29'},
            {key: 'healtex30'},
            {key: 'healtex31'},
            {key: 'healtex32'},
            {key: 'healtex33'},
            {key: 'healtex34'},
            {key: 'healtex35'},
            {key: 'healtex36'},
            {key: 'healtex37'},
            {key: 'healtex38'},
            {key: 'healtex39'},
            {key: 'healtex40'},
            {key: 'healtex41'},
            {key: 'healtex42'},
            {key: 'healtex43'},
            {key: 'healtex44'},
            {key: 'healtex45'},
            {key: 'healtex46'},
            {key: 'healtex47'},
            {key: 'healtex48'},
            {key: 'healtex49'},
            {key: 'healtex50'},
            {key: 'healtex51'},
            {key: 'healtex52'},
            {key: 'healtex53'},
            {key: 'healtex54'},
            {key: 'healtex55'},
            {key: 'healtex56'},
            {key: 'healtex57'},
            {key: 'healtex58'},
            {key: 'healtex59'},
            {key: 'healtex60'},
            {key: 'healtex61'},
            {key: 'healtex62'},
            {key: 'healtex63'},
            {key: 'healtex64'},
            {key: 'healtex65'},
            {key: 'healtex66'},
            {key: 'healtex67'},
            {key: 'healtex68'},
            {key: 'healtex69'},
            {key: 'healtex70'},
            {key: 'healtex71'},
            {key: 'healtex72'},
            {key: 'healtex73'},
            {key: 'healtex74'},
            {key: 'healtex75'},
            {key: 'healtex76'},
            {key: 'healtex77'},
            {key: 'healtex78'},
            {key: 'healtex79'},
            {key: 'healtex80'},
            {key: 'healtex81'},
            {key: 'healtex82'},
            {key: 'healtex83'},
            {key: 'healtex84'},
            {key: 'healtex85'},
            {key: 'healtex86'},
            {key: 'healtex87'},
            {key: 'healtex88'},
            {key: 'healtex89'},
            {key: 'healtex90'}
        ],
        frameRate: 30,
        repeat: -1
    });

    healtex = this.add.sprite(400, 300, 'healtex0').play('healFactor');

}

function loadBoss() {
    console.log("Creating boss");
    var xPos = Math.floor((Math.random() * 600) +100);
    var yPos = Math.floor((Math.random() * 500) + 5);
    var rand = Math.floor((Math.random() * 3) + 1);
    var tempBh;

    tempBh = them.physics.add.sprite(xPos, yPos, 'boss');
    bh = new Blockhead(blockHeadArray.length+1, "Big Boss", 25, 5, 7, 3, 4);
    bh.setBhPiece(tempBh);
    tempBlockheadArray.push(bh);
    enemies.add(tempBh);
    them.physics.add.collider(heroPiece, tempBh, () => {heroDamage(bh)});
    tempBh.setCollideWorldBounds(true);
    tempBh.setScale(2);

    let tempDiv = createBhDiv(bh.id);
    bh.setDiv(tempDiv);
    let targetsDiv = document.getElementById("targetDiv");
    targetDiv.appendChild(tempDiv);
    bh.displayStats();
}

function createBlockHeads(that, blockHeadArray) {
    tempBlockheadArray = blockHeadArray;
    for (const bh of tempBlockheadArray) {
        var xPos = Math.floor((Math.random() * 600) + 100);
        var yPos = Math.floor((Math.random() * 500) + 5);
        var rand = Math.floor((Math.random() * 3) + 1);
        var tempBh;

        if (rand == 3) {
            tempBh = that.physics.add.sprite(xPos, yPos, 'iceboi');
            bh.setBhPiece(tempBh);
            enemies.add(tempBh);
            that.physics.add.collider(heroPiece, tempBh, () => {heroDamageFreeze(bh)});
            tempBh.setCollideWorldBounds(true);
            tempBh.setScale(2);
        } else {
            tempBh = that.physics.add.sprite(xPos, yPos, 'blockhead');
            bh.setBhPiece(tempBh);
            enemies.add(tempBh);
            that.physics.add.collider(heroPiece, tempBh, () => {heroDamage(bh)});
            tempBh.setCollideWorldBounds(true);
        }
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

function heroDamageFreeze(bh) {
    if (invincible == false) {
        woof.play();
        sam.takeDamage(bh.attack);
        bh.takeDamage(sam.attack)
        heroPiece.setVelocityX(0);
        heroPiece.setVelocityY(0);
        setInvincibility();
        freeze();
    }
}

function freeze() {
    let statsDiv = document.getElementById("stats");
    
    
    statsDiv.style.background = "cyan";
    
    frozen = true;
    setTimeout(() => {
        statsDiv.style.background = "";
        frozen = false;
    }, 1000);
}

function heal() {
    if (sam.heroPiece.x > 350 && sam.heroPiece.x < 450 && sam.heroPiece.y < 350 && sam.heroPiece.y > 250) {
        // debugger;
        if (sam.health < sam.maxHealth && canHeal === true) {
        sam.health += 1;
        audioSlower +=1;
        if(audioSlower === 1 || audioSlower%4 === 0){
            nice.play()
        }
        sam.displayStats();
        setCanHeal()}
    }
}

function setCanHeal() {
    canHeal = false;
    setTimeout(() => {
    canHeal = true;
}, 1000);
}

function setInvincibility() {
    
    
    statsDiv.style.background = "pink";
    
    invincible = true;
    setTimeout(() => {
        statsDiv.style.background = "";
        invincible = false;
    }, 1000);
}


function update(){
    heroSpeed = sam.speed;

    heal();

    if (frozen == false) {

        if (cursors.left.isDown)
        {
            heroPiece.setVelocityX(-120 - (50 * heroSpeed));
        }
        else if (cursors.right.isDown)
        {
            heroPiece.setVelocityX(120 + (50 * heroSpeed));
        }
        else if (cursors.down.isDown)
        {
            heroPiece.setVelocityY(120 + (50 * heroSpeed));
        }
        else if (cursors.up.isDown)
        {
            heroPiece.setVelocityY(-120 - (50 * heroSpeed));
        }
        else
        {
            heroPiece.setVelocityX(0);
            heroPiece.setVelocityY(0);
        }
    }

    checkBlockheadDeath();

    if (sam.isDead()) {
        them.add.text(game.config.width / 5, game.config.height / 2, 'GAME OVER', { fontSize: '96px', fill: '#fff' });
        them.physics.pause();
        gameOver = true;
    }

    if (tempBlockheadArray.length === 0) {
        them.add.text(game.config.width / 5, game.config.height / 2, 'YOU WIN!', { fontSize: '96px', fill: 'indigo' });
        them.physics.pause();
    }

}

function checkBlockheadDeath() {
    for (let i = 0; i<tempBlockheadArray.length; i++) {
        if (tempBlockheadArray[i].isDead()){
            tempBlockheadArray[i].die();
            enemies.children.entries[i].destroy();
            tempBlockheadArray.splice(i,1);

            killBlockheadSound.play();
            if (progPercentage < 100) {
            progPercentage += 25;
            document.styleSheets[0].cssRules[1].style.width = progPercentage.toString()+'%'}
            else {
            document.styleSheets[0].cssRules[1].style.width = "0%"
            progPercentage = 0
            sam.addLevelStat()
            levelInc()
            lBar.style.background = "yellow"
            lBar.innerText =  "LEVEL UP!!!!"
            loadBoss();
            setTimeout(() => {
                lBar.style.background = "";
                lBar.innerText = sam.level
            }, 1000);
            them.physics.pause()
            }
            
        }
    }
}

function levelInc(){
    levelup.style = ''
    levelup.style.background = "yellow"
    uphealth.addEventListener('click', () => {sam.addHealthStat()})
    upattack.addEventListener('click', () => {sam.addAttackStat()})
    updefence.addEventListener('click', () => {sam.addDefenceStat()})
    upspeed.addEventListener('click', () => {sam.addSpeedStat()})
}

nameForm.addEventListener('submit', (ev) => {renameFighter(ev)})

function renameFighter(ev) {
    ev.preventDefault()
    heroName.innerText = newName.value
    sam.name = newName.value
}