class Hero {
    constructor(id, name, health, maxHealth, level, progress, attack, defence, speed) {
        this.id = id;
        this.name = name;
        this.health = health;
        this.maxHealth = maxHealth
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

    isDead() {
        if (this.health <= 0) {
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