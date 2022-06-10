const pixelFont = new FontFace('pixelFont', 'url(src/04B_03.ttf)');

const dirtyArray = ['javascript', 'html', 'css', 'node.js', `Firefox`, 'React', 'ironhack'];
let prevChar = "";
let firstChar = true;
let counter = 0;

var createdImage = drawImage();

createdImage.onload = function(){
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
ctx.drawImage(createdImage, 0 ,0);
    pixelFont.load().then(function(font){
        document.fonts.add(font);
        let text = 'ironhack';
        ctx.font = '14px pixelFont';
        let textLength = ctx.measureText(text).width;
        let blockPadding = 5;
        let blockLength = textLength + 2*blockPadding;
        let blockX = 90;
        let blockY = 110;
        let offsetX = blockPadding;
        let offsetY = 14;

        //BLOCK
        ctx.roundRect(blockX-50, blockY-50, blockLength, 21, 5);
        ctx.fillStyle = 'rgba(45, 62, 80, 1)';
        ctx.fill();
        ctx.fillStyle = 'white';
        ctx.fillText(text, blockX+offsetX-50, blockY+offsetY-50);
        
        //BLOCK
        ctx.roundRect(blockX, blockY, blockLength, 21, 5);
        ctx.fillStyle = 'rgba(45, 62, 80, 1)';
        ctx.fill();
        ctx.fillStyle = '#ff9c00';
        ctx.fillText(text.slice(0,1), blockX+offsetX, blockY+offsetY);
        ctx.fillStyle = '#a09aa5';
        ctx.fillText(text.slice(1), blockX+offsetX+ctx.measureText(text.slice(0,1)).width, blockY+offsetY);

        //BLOCK
        ctx.roundRect(blockX+50, blockY+50, blockLength, 21, 5);
        ctx.fillStyle = 'rgba(45, 62, 80, 1)';
        ctx.fill();
        ctx.fillStyle = '#ff9c00';
        ctx.fillText(text.slice(0,3), blockX+offsetX+50, blockY+offsetY+50);
        ctx.fillStyle = '#a09aa5';
        ctx.fillText(text.slice(3), blockX+offsetX+ctx.measureText(text.slice(0,3)).width+50, blockY+offsetY+50);

        //BLOCK
        ctx.roundRect(blockX+100, blockY+100, blockLength, 21, 5);
        ctx.fillStyle = 'rgba(45, 62, 80, 1)';
        ctx.fill();
        ctx.fillStyle = '#ff9c00';
        ctx.fillText(text.slice(0,6), blockX+offsetX+100, blockY+offsetY+100);
        ctx.fillStyle = '#a09aa5';
        ctx.fillText(text.slice(6), blockX+offsetX+ctx.measureText(text.slice(0,6)).width+100, blockY+offsetY+100);

        //BLOCK
        ctx.roundRect(blockX+150, blockY+150, blockLength, 21, 5);
        ctx.fillStyle = 'rgba(45, 62, 80, 1)';
        ctx.fill();
        ctx.fillStyle = '#ff9c00';
        ctx.fillText(text.slice(0,8), blockX+offsetX+150, blockY+offsetY+150);
        ctx.fillStyle = '#a09aa5';
        ctx.fillText(text.slice(8), blockX+offsetX+ctx.measureText(text.slice(0,8)).width+150, blockY+offsetY+150);
        //de fet no cal escriure en blanc, perquè hem arribat al final => text.slice(8) = text;
    });	
};

CanvasRenderingContext2D.prototype.roundRect = function (x, y, width, height, radius) {
    if (width < 2 * radius) radius = width / 2;
    if (height < 2 * radius) radius = height / 2;
    this.beginPath();
    this.moveTo(x + radius, y);
    this.arcTo(x + width, y, x + width, y + height, radius);
    this.arcTo(x + width, y + height, x, y + height, radius);
    this.arcTo(x, y + height, x, y, radius);
    this.arcTo(x, y, x + width, y, radius);
    this.closePath();
    return this;
};

function logKeysCanvas() {
    return true;
};


function drawImage(){
    var background = new Image();
    background.src = "./img/bkg_stars.png";
   
   return background;
 }



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
        htmlCode += `<h4 id="word${index}"><span id="first-part">${word}</span><span id="second-part"></span></h4>`;
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
            firstPart = document.querySelector(`#word${selectedIndex} #first-part`);
            firstPart.classList.add("orange");
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

//Prepare array and initialize HTML
let wordsArray = cleanArray(dirtyArray);
buildHTML(wordsArray);
///////////////////////////////////




document.addEventListener("keydown", logKeys);
document.addEventListener("keydown", logKeysCanvas);