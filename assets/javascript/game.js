/* -------------------------

* watch for any key being pressed to get started (start function)


SOOOO when a valid/new letter is guessed:
    1. number of guesses remaining decreases by one
    2. letter appears under letters guessed
    3. if the letter is in the current word, it replaces the underscore

* (randomly?) select word from array of words.
    - each word has its own set of properties to be displayed when it's guessed correctly
    - generate the same number of underscores as the word is long and display under current word
    - when correct letter guessed, the underscore is replaced with that letter

* set number of guesses equal to 12 when new game begins
    - reduce number of guesses by one when each VALID letter character is guessed, does not reduce when letter already guessed (maybe create alphabet array), remove option once it's guessed

* each time a valid char letter is guessed for the first time, it is displayed in browser

* everything resets once word is guessed correctly

* once word is guessed correctly, picture is displayed and sound plays

* when started, need to capture each letter pressed in lettersAlreadyGuessed and display on screen

---------------------------*/

/* (randomly?) select word from array of words.
- each word has its own set of properties to be displayed when it's guessed correctly
- generate the same number of underscores as the word is long and display under current word
- when correct letter guessed, the underscore is replaced with that letter */

var wordArray = [
    {
        word: "balsam Fir",
        group: "Coniferous",
        bark: "Smooth, grayish, prominently marked by blisters filled with resin or balsam pitch.",
        treeImage: "<img src='images/abies-balsamea-15-5-2.jpg' alt='Balsam Fir Tree'>",
        leafImage: "<img src='images/abies-balsamea-15-5-10.jpg' alt='Balsam Fir Tree'>",
    },
    {
        word: "black spruce",
        group: "Coniferous",
        bark: "Grayish to reddish-brown, scaly.",
        treeImage: "<img src='images/picea-mariana-001.jpg' alt='Black spruce'>",
        leafImage: "<img src='images/picea-mariana-689-2.jpg' alt='Black spruce'>",
    },
    {
        word: "eastern hemlock",
        group: "Coniferous",
        bark: "Deeply divided into narrow rounded ridges; covered with thick, flat scales; cinnamon-red to gray.",
        treeImage: "<img src='images/tsuga-canadensis-15-6.jpg' alt='Eastern hemlock'>",
        leafImage: "<img src='images/tsuga-canadensis-15-11.jpg' alt='Eastern hemlock'>",
    },

    {
        word: "eastern red cedar",
        group: "Coniferous",
        bark: "aka Juniper. Thin, reddish-brown, peeling off in long, vertical shredlike strips.",
        treeImage: "<img src='images/juniperus-virginiana-48-1.jpg' alt='Eastern red cedar (juniper)'>",
        leafImage: "<img src='images/juniperus-virginiana-643287-11.jpg' alt='Eastern red cedar (juniper)'>",
    },
]

//select random object out of array
var randWordIndex = Math.floor(Math.random() * wordArray.length);
//get word out of the random object that was chosen from array
var currentWord = wordArray[randWordIndex].word;
//output same number of _ as there are letters in word (need to takes space into consideration)
var underlineString = "";
//turned word into string so could find spaces
var wordAsArray = currentWord.split("");
// * wrap in function so runs once valid letter has been guessed
for (i = 0; i < wordAsArray.length; i++) {
    //create if sttmt so each " " character is reflected as space in underline chain
    if (wordAsArray[i] === " "){
        underlineString += " ";
    } else {
    underlineString += "_";
    }
}
//printing underline string to html page
function addUnderlineStringToPage() {
    document.querySelector("#underlineString").innerHTML = underlineString;
}
addUnderlineStringToPage();

console.log(underlineString);

//The answer was: (output on page)
console.log(wordArray[randWordIndex].word);