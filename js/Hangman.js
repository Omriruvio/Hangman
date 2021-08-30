
$(window).on('load', function () {

const words = random_words({exactly: 1, minLength: 8, maxlength: 8});
// var word = (Math.floor(Math.random() * words.length));
selectedword = words[0].toLowerCase();

console.log(selectedword);
var wordstars = "";
var maxattempts = 10;
var currentattempts = 0;
var multiletterattempt = 0;
var maxmultiattempts = 5;
var ismultiattempt = false;
var userletter = "";
var gameover = false;
var guesses = [];

for (let i = 0; i < words[0].length; i++) {
    wordstars = wordstars + "*";
    } //create encrypted word



function replacestar (letter) {
    if (guesses.includes(letter)) { //checks if letter was already guessed
        currentattempts--;
        infomessage.update("You have already tried " + letter);
    }
    else {
    splitword = wordstars.split("");
    appearances = 0
    for (var d = 0; d < wordstars.length; d++)

        if (selectedword[d] === letter) {
            splitword[d] = letter;
            appearances ++;
        }
    if (appearances > 0) {
        if (appearances === 1) {
            guesses.push(letter);
            infomessage.update(letter + " appeared once.")
        }
        if (appearances === 2){
            guesses.push(letter);
            infomessage.update(letter + " appears twice.")
        }
        if (appearances >= 3) {
            guesses.push(letter);
            infomessage.update(letter + " appears three or more times.")
        }
        wordstars = splitword.join("");
        document.getElementById("starredtext").innerHTML = wordstars;
        return wordstars;

    }
    else {
        infomessage.update("Letter did not exist!");
    }

    wordstars = splitword.join("");
    return wordstars;
    }

} //checks if input appears in word, announces amount of appearances and updates revealed word.

function isValid(input) {

    if (input.toLowerCase() !== input.toUpperCase()) {
        if (input.length === 1) {

            return true;
        }
        else {
            if ((input) === (selectedword)) {
                infomessage.update("You guessed the entire word successfully!");
                document.getElementById("starredtext").innerHTML = selectedword;
                document.gamover = true;
                return false;
            }
            multiletterattempt ++;
            console.log("You have " + (maxmultiattempts - multiletterattempt) + " multi letter attempts remaining..." )
            ismultiattempt = true;
            return true;
        }
    }
    else {
        infomessage.update("Must use alphabetical letters only.")
    }
}

    var userinput = document.getElementById("inputfield");
    userinput.addEventListener("keyup", function(event) {
       if (event.keyCode === 13) {
           document.getElementById("inputbutton").click();
       }
    });

    var userclick = document.getElementById("inputbutton");
    userclick.addEventListener('click', function() {
        if (isValid(userinput.value)) {
            replacestar(userinput.value.toLowerCase());
        }
        userinput.value = "";
        userinput.focus();
    });

    var infomessage = document.getElementById("infomessage");
    infomessage.update = function (infostring) {
        infomessage.innerHTML = infostring;
    }

    userinput.focus();
    document.getElementById("starredtext").innerHTML = wordstars;

// while (!gameover) {
//
// }

// for (currentattempts; currentattempts < maxattempts; currentattempts++) {
//
//     document.getElementById("inputbutton").addEventListener('click', function() {
//         userletter = document.getElementById("inputfield").value;
//         ismultiattempt = false;
//         document.getElementById("starredtext").innerHTML = wordstars;
//         // console.log("You have " + (maxattempts - currentattempts) + " regular attempts remaining.");
//         document.getElementById("attemptsremain").innerHTML = ((maxattempts - currentattempts) + " regular attempts remain.");
//         // console.log((maxmultiattempts - multiletterattempt) + " multi-letter attempts remain.");
//         document.getElementById("multiremain").innerHTML = ((maxmultiattempts - multiletterattempt) + " multi-guess attempts remain.");
//         console.log(wordstars);
//         console.log("inside function attempts : " + currentattempts);
//
//         // var userletter = window.prompt("Guess a letter:").toLowerCase();
//
//
//         if (!instantwin(userletter)) {
//             if (!isValid(userletter)){
//                  currentattempts--;
//             }
//             else {
//                 if (selectedword.indexOf(userletter) > -1) {
//                         currentindex = selectedword.indexOf(userletter);
//                         wordstars = replacestar(wordstars, userletter);
//
//                         currentattempts--;
//                         if (wordstars.indexOf("*") < 0) {
//                             console.log("Success!!! The word was " + selectedword + "!")
//                             return;
//                         }
//                     } //if letter exists, updates, checks if completed.
//                 else {
//                     if (!ismultiattempt) {
//                         console.log(userletter + " letter does not exist.");
//
//                     }
//                 }
//             }
//             if (currentattempts === (maxattempts-1)) {
//                 console.log("No more guesses left");
//                 console.log("The word was " + selectedword);
//             }
//             if (ismaxmulti()) {
//                 console.log("You have spent " + maxmultiattempts + " multi letter attempts. This is the maximum. Goodbye.")
//                 // break;
//             }
//         }
//         else {
//             console.log("You guessed the entire word successfully!");
//             console.log("The word was " + selectedword + "!");
//             // break;
//
//
//         }
//
//     });
//
//
//
//
// }

});