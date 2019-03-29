let sam;

let blockHeadArray = [];

let targetDiv = document.getElementById("targetDiv");
let toggler = document.createElement('button') 
let showing;

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
    sam = new Hero(json[0].id, json[0].name, json[0].health, json[0].maxHealth, json[0].level, json[0].progress, json[0].attack, json[0].defence, json[0].speed);
    sam.displayStats();
}

fetch("http://localhost:3000/api/v1/blockheads")
.then(response => response.json())
.then(json => {
    loadBlockHeadData(json);
})

function loadBlockHeadData(json) {
    for (const elem of json) {
        var temp = new Blockhead(elem.id, elem.name, elem.health, elem .level, elem.attack, elem.defence, elem.speed);
        var tempDiv = createBhDiv(temp.id);
       
        temp.setDiv(tempDiv);
        temp.displayStats();
        targetDiv.appendChild(tempDiv);

        blockHeadArray.push(temp);
    }

    document.body.appendChild(targetDiv);
}

function createBhDiv(id) {
    let bhDiv = document.createElement("div");

    let bhNameLabel = document.createElement("label");
    let bhNameSpan = document.createElement("span");
    let br = document.createElement("br");
    let bhHealthLabel = document.createElement("label");
    let bhHealthSpan = document.createElement("span");

    bhDiv.id = `bh-div-${id}`;
    bhDiv.className="blockStats"
    bhNameLabel.id = `bh-name-label-${id}`;
    bhNameSpan.id = `bh-name-span-${id}`;
    bhNameSpan.style = "color:rgb(170, 128, 255)"
    // br.id = `bh-br-${id}`;
    bhHealthLabel.id = `bh-health-label-${id}`;
    bhHealthSpan.id = `bh-health-span-${id}`;
    bhHealthSpan.style = "color:rgb(227, 115, 74)"

    bhNameLabel.textContent = "Name: ";
    bhHealthLabel.textContent = "Health: ";

    bhDiv.appendChild(bhNameLabel);
    bhDiv.appendChild(bhNameSpan);
    // bhDiv.appendChild(br);
    bhDiv.appendChild(bhHealthLabel);
    bhDiv.appendChild(bhHealthSpan);

    return bhDiv;
}

let p = document.createElement('p');
toggler.innerText = "Toggle HUD"
toggler.addEventListener('click', toggleHUD);
p.appendChild(toggler);
progress.appendChild(p);
showing = true;


function toggleHUD() {
    if (showing === true){
        stats.style="visibility: hidden"
        targetDiv.style="visibility: hidden"
        showing = false
    }
    else{
        stats.style=""
        targetDiv.style=""
        showing = true
    }
}