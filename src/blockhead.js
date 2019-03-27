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

    takeDamage(dmg) {
        this.health -= dmg;
        this.displayStats();
    }

    heal() {
        this.health = 10;
        this.displayStats();
    }

    isDead() {
        if (health < 0) {
            return true;
        }
        return false;
    }
}