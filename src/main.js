let sam;
let blockHeadArray = [];
let clockhead = new Blockhead(1);
let lockhead = new Blockhead(2);
let ockhead = new Blockhead(3);
let ckhead = new Blockhead(4);
let head = new Blockhead(5);

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
    clockhead = new Blockhead(json[1].id, json[1].name, json[1].health, json[1].level, json[1].attack, json[1].defence, json[1].speed);
    lockhead = new Blockhead(json[2].id, json[2].name, json[2].health, json[2].level, json[2].attack, json[2].defence, json[2].speed);
    ockhead = new Blockhead(json[3].id, json[3].name, json[3].health, json[3].level, json[3].attack, json[3].defence, json[3].speed);
    ckhead = new Blockhead(json[4].id, json[4].name, json[4].health, json[4].level, json[4].attack, json[4].defence, json[5].speed);
    head = new Blockhead(json[5].id, json[5].name, json[5].health, json[5].level, json[5].attack, json[5].defence, json[5].speed);


    blockHeadArray.push(clockhead);
    blockHeadArray.push(lockhead);
    blockHeadArray.push(ockhead);
    blockHeadArray.push(ckhead);
    blockHeadArray.push(head);

}