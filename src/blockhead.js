class Blockhead {
    constructor(id){
        this.id = id;
        this.name = "";
        this.health = 0;
        this.level = 0;
        this.attack = 0;
        this.defence = 0;
        this.speed = 0;
        this.loadData()
    }

    loadData() {
        fetch('http://localhost:3000/api/v1/blockheads')
        .then(response => response.json())
        .then(json => {
            this.name = json[this.id].name;
            this.health = json[this.id].health;
            this.level = json[this.id].level;
            this.attack = json[this.id].attack;
            this.defence = json[this.id].defence;
            this.speed = json[this.id].speed;
        })
    }
}