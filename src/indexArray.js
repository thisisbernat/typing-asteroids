const words = ['barcelona', 'girona', 'tarragona', 'lleida'];
let app = document.querySelector("#app")

let prevChar = "";
let counter = 0;


words.forEach(function(word, index) {
    const splittedWord = word.split("");
    console.log(splittedWord);
});



/*

function logKeys(event) {
    if (event.key === splittedWord[counter]) {
        secondPart.classList.add("red");
        firstPart.classList.add("dark");
        counter += 1;
        prevChar += event.key;
        let keyPressDOM = document.querySelector("#keys");
        keyPressDOM.innerText = prevChar;   
        firstPart.innerHTML = prevChar;
        secondPart.innerHTML = word.slice(counter);  
    };
    
    let counterDOM = document.querySelector("#counter");
    if (counter < splittedWord.length) {
        counterDOM.innerText = counter;
    } else if (counter === splittedWord.length) {
        counterDOM.innerText = 'Final!';
    }
    
};

document.addEventListener("keydown", logKeys);

*/
