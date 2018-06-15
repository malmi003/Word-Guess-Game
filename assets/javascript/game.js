/* -------------------------

* watch for any key being pressed to get started (start function)
* need to update README




* once word is guessed correctly, sound plays


* for future - add more objects to array and then remove them from array so you don't get them twice? Then restart - give them option or not
---------------------------*/
// -----------------------------------------


//----------------functions----------------

//..............reset guesses..............
function resetInitialValues() {
    document.querySelector("#numberOfGuessesRemaining").innerHTML = 10;
    document.querySelector("#lettersGuessed").innerHTML = "<small>incorrect guesses will show up here</small>";
    document.querySelector("#underlineString").innerHTML = "";
    allLettersGuessed = "";

};

//..............set word and Underscores........
function setWordAndUs() {
    //select random object out of array
    randIndex = Math.floor(Math.random() * wordArray.length);
    //get word out of the random object that was chosen from array
    currentWord = wordArray[randIndex].word;


    //turned word into string
    wordAsArray = currentWord.split("");
    underlineString = "";
    for (i = 0; i < wordAsArray.length; i++) {
        //if sttmt so each " " character is reflected as space in underline chain
        if (wordAsArray[i] === " ") {
            underlineString += " ";
        } else {
            underlineString += "_";
        }
    }
}

//...........printing underline string to page..........
function addUnderlineStringToPage() {
    document.querySelector("#underlineString").innerHTML = underlineString;
}

//...........what to do on win..........
//---------once you guess the word correctly---------
// * && make winner thing so cant keep guessing letters
// * if underlineString does not contain any "_", game is over, create if loop outside of counter loop so if "underline string contains _ do this, otherwise stop and restart"

// * - display congrats, change picture, add tree content
// * - reset counter, increase win count, change word.
function checkForWin() {
    if (underlineString.indexOf("_") === -1) {
        winCount++;
        document.querySelector("#winCount").innerHTML = winCount;
        resetInitialValues();
        setWordAndUs();
        addUnderlineStringToPage();
        alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        //show footer and swipe through pictures and facts
        //need to change to previous array
        var imageName = previousArray.treeImage;
        setImage("assets/images/" + imageName);
        document.querySelector("#nameOfTree").innerHTML = previousArray.word;
        document.querySelector("#status").innerHTML = "Nice Guessing!"
        document.querySelector("#tryAgain").innerHTML = "Your next word has been re-tree-ved →"
    }
}

//...........what to do on lose..........
function checkForLoss() {
    if (guessCount == 0) {
        resetInitialValues();
        setWordAndUs();
        addUnderlineStringToPage();
        alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        //replace img with you lose
        setImage("assets/images/markus-spiske-603099-unsplash.jpg");
        document.querySelector("#nameOfTree").innerHTML = "";
        document.querySelector("#status").innerHTML = "You Lose!"
        document.querySelector("#tryAgain").innerHTML = "Not time to re-tree-t yet! Your next word is ready for you →"
        document.querySelector("#nameOfLoserTree").innerHTML = "The answer was:";
        document.querySelector("#nameOfLoserTree2").innerHTML = previousArray.word;
    }


}
//...........change display image..........
function setImage(imageLocation) {
    document.querySelector("#mainImage").setAttribute("src", imageLocation)
}
//-------------declaring variables--------------
var randIndex = 0;
var previousArray = 0;
var currentWord = "";
var underlineString = "";
var wordAsArray = "";
var allLettersGuessed = "";
var guessCount = 0;
var winCount = 0;


//-------------declaring arrays------------
var wordArray = [
    {
        word: "balsam fir",
        group: "Coniferous",
        bark: "Smooth, grayish, prominently marked by blisters filled with resin or balsam pitch.",
        treeImage: "abies-balsamea-15-5-2.jpg",
        leafImage: "abies-balsamea-15-5-10.jpg",
    },
    {
        word: "black spruce",
        group: "Coniferous",
        bark: "Grayish to reddish-brown, scaly.",
        treeImage: "picea-mariana-001.jpg",
        leafImage: "picea-mariana-689-2.jpg",
    },
    {
        word: "eastern hemlock",
        group: "Coniferous",
        bark: "Deeply divided into narrow rounded ridges; covered with thick, flat scales; cinnamon-red to gray.",
        treeImage: "tsuga-canadensis-15-6.jpg",
        leafImage: "tsuga-canadensis-15-11.jpg",
    },

    {
        word: "eastern red cedar",
        group: "Coniferous",
        bark: "aka Juniper. Thin, reddish-brown, peeling off in long, vertical shredlike strips.",
        treeImage: "juniperus-virginiana-48-1.jpg",
        leafImage: "juniperus-virginiana-643287-11.jpg",
    },
    {
        word: "eastern white pine",
        group: "Coniferous",
        bark: "Thin, smooth, and greenish gray on young trees, but thick, deeply furrowed, and grayish brown on older trees.",
        treeImage: "pinus-strobus-85.jpg",
        leafImage: "pinus-strobus-928-13.jpg",
    },
    {
        word: "jack pine",
        group: "Coniferous",
        bark: "Dull red-brown; irregularly divided into small scales.",
        treeImage: "pinus-banksiana-678-3.jpg",
        leafImage: "pinus-banksiana-7098-1.jpg",
    },
    {
        word: "northern white cedar",
        group: "Coniferous",
        bark: "Gray to reddish brown, separating in long, vertical, narrow shreddy strips.",
        treeImage: "thuja-occidentalis-678243-1.jpg",
        leafImage: "thuja-occidentalis-398-2.jpg",
    },
    {
        word: "red pine",
        group: "Coniferous",
        bark: "aka Norway Pine. Becomes divided into large reddish brown plates as it matures, which gives tree its characteristic appearance and its common name, red pine.",
        treeImage: "pinus-resinosa-98207878.jpg",
        leafImage: "pinus-resinosa-005.jpg",
    },
    {
        word: "tamarack",
        group: "Coniferous",
        bark: "Rough with thin, reddish brown scales. Twigs are light brown and covered with numerous tiny spurs or short branches.",
        treeImage: "larix-laricina-4329-2.jpg",
        leafImage: "larix-laricina-45-1.jpg",
    },
    {
        word: "white spruce",
        group: "Coniferous",
        bark: "Dark gray or gray-brown and scaly.",
        treeImage: "picea-glauca-005.jpg",
        leafImage: "picea-glauca-75-2.jpg",
    },
]

var alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//-------------calling initial functions------------
// document.querySelector("#status").innerHTML = "";
document.querySelector("#winCount").innerHTML = "0";
resetInitialValues();
setWordAndUs();
addUnderlineStringToPage();

// document.onkeyup = function() {
//     console.log("work");
// }

//-------------watching for keystroke to start game------------
document.onkeyup = function (event) {
    guessCount = document.querySelector("#numberOfGuessesRemaining").innerHTML;

    // function gameFunction() {

    if (guessCount > 0) {
        var guessedLetter = event.key;
        var alphabetIndex = alphabetArray.indexOf(guessedLetter);
        if (alphabetIndex != -1) {
            //remove letter from alphabetArray
            alphabetArray.splice(alphabetIndex, 1);

            // ............replaces "_" with correct letters...............
            //if that letter is in the currentWord, go to that index of underlineStringArray and put it in there, update underlineStringArray to that new value, display it to page, repeat

            var indexOfCurrentWord = currentWord.indexOf(guessedLetter);

            //if the guessed letter equals a letter in currentWord
            if (indexOfCurrentWord !== -1) {
                var underlineStringArray = underlineString.split("");

                for (var i in wordAsArray) {
                    var indexOfCurrentWord2 = wordAsArray.indexOf(guessedLetter);
                    if (indexOfCurrentWord2 !== -1) {
                        //replace "_" with letter
                        underlineStringArray.splice(indexOfCurrentWord2, 1, guessedLetter);
                        underlineString = underlineStringArray.join("");
                        addUnderlineStringToPage();

                        wordAsArray.splice(indexOfCurrentWord2, 1, "-")
                    }

                }
            } else {

                // this should only contain letters that were not in current word
                allLettersGuessed += guessedLetter;
                allLettersGuessedArray = allLettersGuessed.split("");
                allLettersGuessedRejoined = allLettersGuessedArray.join(" ");
                document.querySelector("#lettersGuessed").innerHTML = allLettersGuessedRejoined;
                // reduce guesses by 1 each time and put back in browser
                guessCount--;
                document.querySelector("#numberOfGuessesRemaining").innerHTML = guessCount;
            }



        }
    }
    previousArray = wordArray[randIndex];
    checkForWin();
    checkForLoss();
}
