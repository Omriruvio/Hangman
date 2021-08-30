
$(window).on('load', function () {

var words = random_words({exactly: 1, minLength: 8, maxlength: 8});
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
        currentattempts++;
        userattempts.update();
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
            if ((input.toLowerCase()) === (selectedword)) {
                infomessage.update("You guessed the entire word successfully!");
                document.getElementById("starredtext").innerHTML = selectedword;
                document.gamover = true;
                return false;
            }
            multiletterattempt ++;
            usermulti.update();
            infomessage.update("Word guess was incorrect!")
            ismultiattempt = true;
            return true;
        }
    }
    else if (input !== "") {
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
        ismultiattempt = false;
        if (isValid(userinput.value)) {
            if (!ismultiattempt) {
            replacestar(userinput.value.toLowerCase()); }
        }
        userinput.value = "";
        userinput.focus();
    });

    var infomessage = document.getElementById("infomessage");
    infomessage.update = function (infostring) {
        infomessage.innerHTML = infostring;
    }

    var userattempts = document.getElementById("attemptsremain");
    userattempts.update = function () {
        userattempts.innerHTML = ((maxattempts - currentattempts) + " attempts remain.");
    }

    var usermulti = document.getElementById("multiremain");
    usermulti.update = function () {
        usermulti.innerHTML = ((maxmultiattempts - multiletterattempt) + " multi-guess attempts remain.");
    }

    var stardisplay = document.getElementById("starredtext");
    stardisplay.update = function () {
        stardisplay.innerHTML = wordstars;
    }

    var userreset = document.getElementById("resetbutton");
    userreset.addEventListener('click', function() {
        words = random_words({exactly: 1, minLength: 8, maxlength: 8});
        selectedword = words[0].toLowerCase();
        console.log(selectedword);
        wordstars = "";
        for (let i = 0; i < words[0].length; i++) { wordstars = wordstars + "*";}
        guesses = [];
        currentattempts = 0;
        multiletterattempt = 0;
        userattempts.update();
        usermulti.update();
        stardisplay.update();
        infomessage.update("Guess a letter or the entire word!");
        userinput.value = "";
        userinput.focus();
    });

    userinput.focus();
    document.getElementById("starredtext").innerHTML = wordstars;

})

