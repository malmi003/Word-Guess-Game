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

* when correct letter guessed, the underscore is replaced with that letter

---------------------------*/
// -----------------------------------------
var wordArray = [
    {
        word: "balsam fir",
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

// * need to find way for this to only operate once


// document.onkeypress = function () {
//erase start instructions, set win count to zero
document.querySelector("#instructionsToStart").innerHTML = " ";
document.querySelector("#winCount").innerHTML = 0;

//reset initial values 
function resetInitialValues() {
    document.querySelector("#numberOfGuessesRemaining").innerHTML = 12;
    document.querySelector("#lettersGuessed").innerHTML = "Press a key!";
};

//calling reset function initially 
resetInitialValues();


//-------------set word and Underscores---------
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
    if (wordAsArray[i] === " ") {
        underlineString += " ";
    } else {
        underlineString += "_";
    }
}

//------------prints initial _ _ _ to page---------
//printing underline string to html page
function addUnderlineStringToPage() {
    document.querySelector("#underlineString").innerHTML = underlineString;
}
//calling addUnderlineStringToPage function
addUnderlineStringToPage();

// * create function to run rest of this, without resetting the word each time

//-------------dealing with letter once guessed------------
var alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// ............adds to letters guessed list...............
var allLettersGuessed = "";
document.onkeyup = function (event) {
    // if (guessedLetter is in alphArray) {add to allLettersGuessed && remove guessedLetter from array && reduce number of guesses}

    // find current # of guesses,
    var guessCount = document.querySelector("#numberOfGuessesRemaining").innerHTML;
    if (guessCount > 0) {
        var guessedLetter = event.key;
        var indexOfGuessedLetter = alphabetArray.indexOf(guessedLetter);
        if (indexOfGuessedLetter != -1) {
            //remove from alphabetArray
            alphabetArray.splice(indexOfGuessedLetter, 1);
            //add to guess chain and display on page
            allLettersGuessed += guessedLetter;
            allLettersGuessedArray = allLettersGuessed.split("");
            allLettersGuessedRejoined = allLettersGuessedArray.join(" ");
            document.querySelector("#lettersGuessed").innerHTML = allLettersGuessedRejoined;
            // reduce guesses by 1 each time and put back in browser
            guessCount--;
            document.querySelector("#numberOfGuessesRemaining").innerHTML = guessCount;

            //if the guessed letter equals a letter in currentWord
            var indexOfCurrentWord = currentWord.indexOf(guessedLetter);
            if (indexOfCurrentWord != -1) {
                //take that letter, figure out where goes in _ chain, and add it there in 
                // * need to loop through to make sure catching all letters
                var underlineStringArray = underlineString.split("");
                console.log(underlineStringArray);

                underlineStringArray.splice(indexOfCurrentWord, 1, guessedLetter);




            }
            console.log(underlineStringArray);

        } else {
            // * make a you lose comments and a try again button that resets everything!!!!
        }
    }


    // ............ ...............



    //take that letter and put it where it belongs in _ chain
    // for (i = 0; i < wordAsArray.length; i++) {
    //     //create if statement so each " " character is reflected as space in underline chain
    //     if (wordAsArray[i] === " ") {
    //         underlineString += " ";
    //     } else {
    //         underlineString += "_";
    //     }
    // }
}

// --------------------------------------------
//The answer was: (output on page)
console.log(currentWord);

// }