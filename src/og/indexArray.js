const words = ['barcelona', 'girona', 'tarragona', 'lleida'];
let app = document.querySelector("#app")

let prevChar = "";
let counter = 0;
let initials = [];

//Construir HTML
let html = "";
words.forEach(function(word, index) {
    html += `<h1 id="word${index}"><span id="first-part">${word}</span><span id="second-part"></span></h1>`;
    initials.push(word[0]);
});
app.innerHTML = html;



//Choice word by pressing first letter
function logKeys(event) {
    let index = initials.indexOf(event.key);
    if (index !== -1) {
        firstPart = document.querySelector(`#word${index} #first-part`);
        firstPart.classList.add("red");
        secondPart = document.querySelector(`#word${index} #second-part`);
        secondPart.classList.add("dark");
        console.log('Present');
        //Ja tenim la paraula seleccionada (index), cridem funció per acabar-la de completar
        words[index].forEach(function(char, j) {
            console.log(char)
        });
        
    }
};

function spell(key, word) {
    console.log(word);
    counter += 1;
    prevChar += key;
    firstPart.innerHTML = prevChar;
    secondPart.innerHTML = word.slice(counter);
}
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

*/

document.addEventListener("keydown", logKeys);


