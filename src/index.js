let prevChar = "";
let wordToShow = "barcelona";
const splittedWord = wordToShow.split("");
let counter = 0;

let firstPart = document.querySelector("#word #first-part");
firstPart.innerHTML = wordToShow;

let secondPart = document.querySelector("#word #second-part");
secondPart.innerHTML = '';



function logKeys(event) {
    if (event.key === splittedWord[counter]) {
        secondPart.classList.add("red");
        firstPart.classList.add("dark");
        counter += 1;
        prevChar += event.key;
        let keyPressDOM = document.querySelector("#keys");
        keyPressDOM.innerText = prevChar;   
        firstPart.innerHTML = prevChar;
        secondPart.innerHTML = wordToShow.slice(counter);  
    };
    
    let counterDOM = document.querySelector("#counter");
    if (counter < splittedWord.length) {
        counterDOM.innerText = counter;
    } else if (counter === splittedWord.length) {
        counterDOM.innerText = 'Final!';
    }
    
};

document.addEventListener("keydown", logKeys);
