const wordsArray = ['BARCÊLONÀ', 'gírona', 'Tarragöna', 'lleidA', `Móra d'Ebre`];
let counter = 0;
let prevChar = "";


//Function cleanArray normalizes the strings in the input array (all lowercase, no accents)
function cleanArray(wordsArray) {
    let cleanedArray = [];
    wordsArray.forEach(function (word) {
        cleanedArray.push(word.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase());
    });
    return cleanedArray;
};

//Function buildHTML shows the words in the array in the HTML
function buildHTML(wordsArray) {
    let app = document.querySelector("#app");
    let htmlCode = "";
    wordsArray.forEach(function (word, index) {
        htmlCode += `<h1 id="word${index}"><span id="first-part">${word}</span><span id="second-part"></span></h1>`;
    });
    app.innerHTML = htmlCode;
};

function createInitialsArray(wordsArray) {
    let initials = [];
    cleanedArray.forEach(function (word, index) {
        initials.push(word[0]);
    });
    return initials;
};

function choiceWord(key) {
    let index = initials.indexOf(key);
    let word = cleanedArray[index];
    console.log(word);
    firstPart = document.querySelector(`#word${index} #first-part`);
    firstPart.classList.add("dark");
    secondPart = document.querySelector(`#word${index} #second-part`);
    secondPart.classList.add("red");
    return index;
};

/*
function spell(index, counter, key) {
    firstPart = document.querySelector(`#word${index} #first-part`);
    firstPart.classList.add("dark");
    secondPart = document.querySelector(`#word${index} #second-part`);
    secondPart.classList.add("red");
    cleanedArray[index].forEach(function(char, j) {
        console.log(char);
    });
    //prevChar += key;
    //firstPart.innerHTML = prevChar;
    //secondPart.innerHTML = cleanedArray[index].slice(counter);
};
*/


function spell(word, counter, key) {

    prevChar += key;
    for (let i = 0; i < word.length; i++) {
        firstPart.innerHTML = prevChar;
        secondPart.innerHTML = word.slice(counter);
        console.log(word[i]);
    };
};




function logKeys(event) {
    let index = choiceWord(event.key);
    if (index !== -1) {
        counter += 1;
        //spell(cleanedArray[index], counter, event.key);
        prevChar += event.key;
    for (let i = 0; i < word.length; i++) {
        firstPart.innerHTML = prevChar;
        secondPart.innerHTML = word.slice(counter);
        console.log(word[i]);
    };
    };


};

let cleanedArray = cleanArray(wordsArray);
buildHTML(cleanedArray);
let initials = createInitialsArray(cleanedArray);
document.addEventListener("keydown", logKeys);