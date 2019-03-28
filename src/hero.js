class Hero {
    constructor(id, name, health, level, progress, attack, defence, speed) {
        this.id = id;
        this.name = name;
        this.health = health;
        this.level = level;
        this.progress = progress;
        this.attack = attack;
        this.defence = defence;
        this.speed = speed;
    }

    displayStats() {
        let body = document.body;
        let nameSpan = document.getElementById("name");
        let healthSpan = document.getElementById("health");
        let levelSpan = document.getElementById("level");
        let attackSpan = document.getElementById("attack");
        let defenceSpan = document.getElementById("defence");
        let speedSpan = document.getElementById("speed");

        nameSpan.textContent = this.name;
        healthSpan.textContent = this.health;
        levelSpan.textContent = this.level;
        attackSpan.textContent = this.attack;
        defenceSpan.textContent = this.defence;
        speedSpan.textContent = this.speed;
    }

    setHeroPiece(heroPiece) {
        this.heroPiece = heroPiece;
    }

    getHeroPiece() {
        return this.heroPiece;
    }

    takeDamage(dmg) {
        this.health -= dmg;
        this.displayStats();
    }
    debugger
    heal() {
        if (sam.heroPiece.x > 350 && sam.heroPiece.x < 450 && sam.heroPiece.y < 350 && sam.heroPiece.y > 250) {
            // debugger;
            if (this.health < 10 && canHeal === true) {
            this.health += 1
            this.displayStats()
            this.setCanHeal()}
        }
    }

    setCanHeal() {
        setTimeout(() => {
        this.canHeal = false}, 500);
    }

    isDead() {
        if (health <= 0) {
            return true;
        }
        return false;
    }

    addSpeedStat() {
        this.speed++;
        this.displayStats();
    }

    addHealthStat() {
        this.health++;
        this.displayStats();
    }

    addLevelStat() {
        this.level++;
        this.displayStats();
    }

    addDefenceStat() {
        this.defence++;
        this.displayStats();
    }
}