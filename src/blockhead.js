class Blockhead {
    constructor(id, name, health, level, attack, defence, speed){
        this.id = id;
        this.name = name;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defence = defence;
        this.speed = speed;
    }

    setBhPiece(bhPiece) {
        this.bhPiece = bhPiece;
    }

    getBhPiece() {
        return this.bhPiece;
    }

    setDiv(div) {
        this.div = div;
    }

    getDiv() {
        return this.div;
    }

    displayStats() {
        this.div.childNodes[1].textContent = this.name;
        this.div.childNodes[3].textContent = this.health
    }

    takeDamage(dmg) {
        this.health -= dmg;
        this.displayStats();
    }

    heal() {
        this.health = 10;
        this.displayStats();
    }

    die() {
        this.div.remove();
    }

    isDead() {
        if (health <= 0) {
            return true;
        }
        return false;
    }
}