let sam;

let blockHeadArray = [];

let bh;
let bh1;
let bh2;
let bh3;
let bh4;

//fetch the hero
fetch("http://localhost:3000/api/v1/heros")
.then(response => response.json())
.then(json => {
    loadHeroData(json);
})

function loadHeroData(json) {
    sam = new Hero(json[0].id, json[0].name, json[0].health, json[0].level, json[0].progress, json[0].attack, json[0].defence, json[0].speed);
    sam.displayStats();
}

fetch("http://localhost:3000/api/v1/blockheads")
.then(response => response.json())
.then(json => {
    loadBlockHeadData(json);
})

function loadBlockHeadData(json) {

    for (const elem of json) {
        blockHeadArray.push(new Blockhead(elem.id, elem.name, elem.health, elem .level, elem.attack, elem.defence, elem.speed));
    }


}