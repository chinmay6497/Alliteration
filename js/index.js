// const  fs = require('fs')
// console.log(fs)
// import fs from 'fs';
// const document = require('document')
// const items = fs.readFileSync('./englishWord.txt').toString().split("\n");

const items = [
"a",
"aa",
"aaa",
"aachen",
"aardvark",
"aardvarks",
"aaron",
"ab",
"ababa",
"abaci",
"aback",
"abactor",
"abactors",
"abacus",
"abacuses",
"abaft",
"abalone",
"abandon",
"abandoned",
"abandonee",
"abandonees",
"abandoning",
"abandonment",
"abandons",
"abase",
"abased",
"abasement",
"abases",
"abash",
"abashed",
"abashes",
"abashing",
"abasing",
"abatable",
"abate",
"abated",
"abatement",
"abatements",
"abater",
"abaters",
"abates",
"abating",
"abator",
"abators",
"abattoir",
"abattoirs",
"abbacies",
"abbacy",
"abbess",
"abbesses",
"abbey",
"abbeys",
"abbot",
"abbots",
"abbott",
"abbreviate",
"abbreviated",
"abbreviates",
"abbreviating",
"abbreviation",
"abbreviations",
"abbreviator",
"abbreviators",
"abc",
"abdicate",
"abdicated",
"abdicates",
"abdicating",
"abdication",
"abdications",
"abdicator",
"abdicators",
"abdomen",
"abdomens",
"abdominal",
"abduct",
"abducted",
"abducting",
"abduction",
"abductions",
"abductor",
"abductors",
"abducts",
"abeam",
"abearances",
"abecedarian",
"abecedarians",
"abed",
"abel",
"aberdeen",
"aberrance",
"aberrant",
"aberration",
"aberrational",
"aberrations",
"abet",
"abets",
"abetted",
"abetting",
"abettor",
];
``
const root = new makeNode('\0');

for (const item of items){
    add(item,0,root);
}

const text_box = document.getElementById("text-box");
const list = document.getElementById("list");

function handleClick(e){
    text_box.value = e.innerText;
}

function handler(e){
    const str = e.target.value;
    prediction = search(str,0,root);
    console.log(prediction);
    list.innerHTML = "";
    for(const pre of prediction){
        list.innerHTML += `<li class = "list-group-item clickable" onclick = "handleClick(this)"> <b>${str}</b>${pre.substring(str.length)}</li>`;
    }

    
}


if(text_box)
    text_box.addEventListener("keyup",handler);
