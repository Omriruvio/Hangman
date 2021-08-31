
$(window).on('load', function () {

var words = random_words({exactly: 1, minLength: 6});
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
var textWrapper = document.querySelector('.starredtext');

for (let i = 0; i < words[0].length; i++) { wordstars = wordstars + "*"; } //create encrypted word

var infomessage = document.getElementById("infomessage");
infomessage.update = function (infostring) {
    infomessage.innerHTML = infostring;
}

var userattempts = document.getElementById("attemptsremain");
userattempts.update = function () {
    userattempts.innerHTML = ((maxattempts - currentattempts) + " letter attempts remain.");
}

var usermulti = document.getElementById("multiremain");
usermulti.update = function () {
    usermulti.innerHTML = ((maxmultiattempts - multiletterattempt) + " word attempts remain.");
}

var stardisplay = document.querySelector(".starredtext");
stardisplay.update = function () {
    stardisplay.innerHTML = wordstars;
    stardisplay.animate();

}

stardisplay.animate = function () { // starred text animation
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({loop: false})
      .add({
        targets: '.starredtext .letter',
        scale: [0,1],
        opacity: [0,1],
        easing: "easeOutCirc",
        duration: 800,
        delay: (el, i) => 400 * i
      }).add({
        targets: '.starredtext',
        opacity: 100,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
}

stardisplay.animateletter = function (array) { // letter reveal animation

    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    for (let i = 0; i < (array.length); i++) {
        let currentletter = 'body > h1 > span:nth-child(' + (array[i]+1) + ')';
        anime.timeline({loop: false})
            .add({
            targets: currentletter,
            rotateY: [-120, 0],
            duration: 15000,
            delay: (el, i) => 45 * i
            }).add({
            targets: '.ml10',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
            });
    }

}

var userreset = document.getElementById("resetbutton");
userreset.addEventListener('click', function() {
    words = random_words({exactly: 1, minLength: 8, maxlength: 8});
    selectedword = words[0].toLowerCase();
    console.log(selectedword);
    wordstars = "";
    for (let i = 0; i < words[0].length; i++) { wordstars = wordstars + "*";}
    guesses = [];
    gameover = false;
    currentattempts = 0;
    multiletterattempt = 0;
    userattempts.update();
    usermulti.update();
    stardisplay.update();
    infomessage.update("Guess a letter or the entire word!");
    userinput.value = "";
    userinput.focus();
});

var userinput = document.getElementById("inputfield");
userinput.addEventListener("keyup", function(event) {
   if ((event.keyCode === 13) && (!gameover)) {
       document.getElementById("inputbutton").click();
   }
   else if ((gameover)) {
       document.getElementById("resetbutton").click();
   }
});

var userclick = document.getElementById("inputbutton");
userclick.addEventListener('click', function() {
    if (!gameover) {
        ismultiattempt = false;
        if (isValid(userinput.value)) {
            if (!ismultiattempt) {
                replacestar(userinput.value.toLowerCase());
            }
        }
        userinput.value = "";
        userinput.focus();
        if ((currentattempts === maxattempts) || (multiletterattempt === maxmultiattempts)) {
            gameover = true;
            infomessage.update("Attempt limit reached, the word was: \"" +selectedword+"\"");
            console.log("gameover");
        }
        if (wordstars === selectedword) {
            gameover = true;
            infomessage.update("You have successfully guessed the word!")
        }
    }
});

function replacestar (letter) {
    if (guesses.includes(letter)) { //checks if letter was already guessed
        infomessage.update("You have already tried " + letter);
    }
    else {
    splitword = wordstars.split("");
    appearances = 0
    discoveredindex = [];

    for (let i = 0; i < wordstars.length; i++)

        if (selectedword[i] === letter) { //checks if letter exists in selectedword
            discoveredindex.push(i);
            splitword[i] = letter;
            appearances ++;
        }
    if (appearances > 0) {
        if (appearances === 1) {infomessage.update(letter + " appeared once.")}
        if (appearances === 2) {infomessage.update(letter + " appears twice.")}
        if (appearances >= 3)  {infomessage.update(letter + " appears three or more times.")}
        guesses.push(letter); // adds letter to guessed letters array
        wordstars = splitword.join("");
        document.querySelector(".starredtext").innerHTML = wordstars;

        stardisplay.animateletter(discoveredindex);

    }
    else {
        infomessage.update("Letter did not exist!");
        currentattempts++;
        userattempts.update();
    }

    wordstars = splitword.join("");
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
                document.querySelector(".starredtext").innerHTML = selectedword;
                gameover = true;
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

userinput.focus();
stardisplay.update();

})

