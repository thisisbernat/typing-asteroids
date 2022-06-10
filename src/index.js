const dirtyArray = ['BARCÊLONÀ', 'gírona', 'tarraGONA', 'lLeídA', 'Urtx', 'Nas', 'Er'];
let prevChar = "";
let firstChar = true;
let counter = 0;

//Function cleanArray normalizes the strings in the input array (all lowercase, no accents)
function cleanArray(wordsArray) {
    const cleanedArray = wordsArray.map(word => word.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase());
    const sortedArr = cleanedArray.sort((a,b) => a.length - b.length);
    return sortedArr;
};

//Function buildHTML shows the words in the array in the HTML
function buildHTML(wordsArray) {
    let app = document.querySelector("#app");
    let htmlCode = "";
    [...wordsArray].forEach(function (word, index) {
        htmlCode += `<h1 id="word${index}"><span id="first-part">${word}</span><span id="second-part"></span></h1>`;
    });
    app.innerHTML = htmlCode;
};

function choice(key) {
    let found = false;
    let selectedIndex = 0;
    for (let i = 0; i < wordsArray.length; i++) {
        if (key === wordsArray[i].charAt(0)) {
            selectedIndex = i;
            found = true;
        };
    };
    if (found) {
        return selectedIndex;
    } else {
        return -1;
    };
};

function logKeys(event) {
    let selectedWord = "";
    if (firstChar) {
        prevChar = event.key;
        let selectedIndex = choice(event.key);
        if (selectedIndex !== -1) {
            //console.log(wordsArray[selectedIndex]);
            //console.log(event.key);
            firstChar = false;
        } else {
            console.log('Continua intentant-ho');
        };
        console.log(prevChar);
    } else {
        //console.log('paraula ja bloquejada:');
        prevChar += event.key;
        
        //spell function:
        let found = false;
        let selectedIndex = 0;
        for (let i = 0; i < wordsArray.length; i++) {
            if (wordsArray[i].indexOf(prevChar) !== -1) {
                selectedIndex = i;
                found = true;
                if (wordsArray[i] === prevChar) {
                    //console.log('paraula completa!');
                    //treure la paraula de l'array
                    wordsArray.splice(i, 1);
                    //console.log(wordsArray);
                    buildHTML(wordsArray);
                    firstChar = true;
                };
            };
        };
        if (found) {
            //console.log(wordsArray[selectedIndex]);
        } else {
            console.log(`error corregit!`);
            prevChar = prevChar.slice(0, -1);
        };
        console.log(prevChar);
    };
};

let wordsArray = cleanArray(dirtyArray);
buildHTML(wordsArray);
document.addEventListener("keydown", logKeys);