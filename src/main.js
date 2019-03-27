let sam = new Hero(0);
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
    sam = new Hero(json[0].id, json[0].name, json[0].health, json[0].level, json[0].attack, json[0].defence, json[0].speed);
    sam.displayStats();
}

// fetch("http://localhost:3000/api/v1/blockheads")
// .then(response => response.json())
// .then(json => {
//     loadBlockHeadData(json);
// })

// function loadBlockHeadData(json) {

// }