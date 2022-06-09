const dirtyArray = ['BARCÊLONÀ', 'gírona', 'Torelló', 'la pôblA de seguR', `Móra d'Ebre`];
let prevChar = "";
let firstChar = true;
let counter = 0;

//Function cleanArray normalizes the strings in the input array (all lowercase, no accents)
function cleanArray(wordsArray) {
    const cleanedArray = wordsArray.map(word => word.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase());
    return cleanedArray;
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

function logKeys(event) {
    let sortedArr = wordsArray.sort((a, b) => b.length - a.length);
    let longestWord = sortedArr[0];
    //console.log(longestWord);
    prevChar += event.key;
    for (let i = 0; i < wordsArray.length; i++) {
        if (firstChar) {
            if (wordsArray[i][0].indexOf(prevChar) !== -1) {
                console.log(wordsArray[i]);
                counter++;
                firstChar = false;
                //Arreglar counter per comptar només si son caracters de la paraula seleccionada
            };
        } else if (wordsArray[i].indexOf(prevChar) !== -1) {
            console.log(wordsArray[i]);
            counter++;
        };
    };
};

let wordsArray = cleanArray(dirtyArray);
buildHTML(wordsArray);
document.addEventListener("keydown", logKeys);