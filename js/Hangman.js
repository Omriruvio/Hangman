
$(window).on('load', function () {

var words = ['hello world', 'aa strange aworld'];
var currentword = words[1];
selectedword = currentword.toLowerCase();
console.log(selectedword);

var game = {}
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
const welcomemsg = "Start here";
var spaceindex = [];

for (let i = 0; i < currentword.length; i++) { //create encrypted word
    if ((currentword[i]) === (' ')) {
        wordstars += " "
        spaceindex.push(i);
    }
    else {
        wordstars = wordstars + "*";
    }
    console.log(wordstars)
}

var infomessage = document.querySelector(".infomessage");
infomessage.update = function (infostring) {
    infomessage.innerHTML = infostring;
    // Wrap every letter in a span
    var textWrapper = document.querySelector('.infosection .infomessage');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: false})
      .add({
        targets: '.infosection .line',
        scaleX: [0,1],
        opacity: [0.5,1],
        easing: "easeInOutExpo",
        duration: 900
      }).add({
        targets: '.infosection .letter',
        opacity: [0,1],
        translateX: [40,0],
        translateZ: 0,
        scaleX: [0.3, 1],
        easing: "easeOutExpo",
        duration: 800,
        offset: '-=600',
        delay: (el, i) => 150 + 25 * i
      }).add({
        targets: '.infosection',
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
}
infomessage.update.correctguess = function () {
    document.querySelector(".infosection .line").setAttribute("style", "background-color: green;");
}
infomessage.update.incorrectguess = function () {
    document.querySelector(".infosection .line").setAttribute("style", "background-color: red;");
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
    stardisplay.innerHTML = (wordstars.replace(/\s/g, "<div class='wordseperator'>&nbsp</div>"));
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
    stardisplay.innerHTML = (wordstars.replace(/\s/g, "<div class='wordseperator'>&nbsp</div>"));
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    let lettercounter = -1;

    for (let i = 0; i < (array.length); i++) { // for every word
        lettercounter ++
        for (let n = 0; n < (array[i].length); n++) { // for every letter
            let currentletter = 'body > h1 > span:nth-child(' + (array[i][n] + 1 - lettercounter) + ')';
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
    }


var userreset = document.getElementById("resetbutton");
userreset.addEventListener('click', function() {
    words = random_words({exactly: 1, minLength: 8, maxlength: 8});
    selectedword = currentword.toLowerCase();
    console.log(selectedword);
    wordstars = "";
    for (let i = 0; i < currentword.length; i++) { wordstars = wordstars + "*";}
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
            infomessage.update("Unfortunate, the word was: \"" +selectedword+"\"");
            infomessage.update.incorrectguess();
            console.log("gameover");
        }
        if (wordstars === selectedword) {
            gameover = true;
            infomessage.update("You have successfully guessed the word!")
        }
    }
});

function existing (value, array) {
    for (let i =0; i < array.length; i++) {
        if (array[i].includes(value) === true) {
            return true;
        }
    }
}

function wordletterindex(array) {
    let wordletterindex = [];
    console.log(spaceindex[3]);
    for (let i=0; i < (spaceindex.length +1); i++) { // for every word
        let currentletterarray = [];
        for (let n=0; n < array.length; n++) { // for every letter
            if (!existing(array[n], wordletterindex)) {
                if ((array[n] < spaceindex[i]) || (spaceindex[i] === undefined)) {
                    currentletterarray.push(array[n]);
                }
            }
        }
        wordletterindex[i] = currentletterarray;
    }
    return wordletterindex;
}

function replacestar (letter) {
    if (guesses.includes(letter)) { //checks if letter was already guessed
        infomessage.update("You have already tried " + letter);
    }
    else {
    splitword = wordstars.split("");
    appearances = 0
    discoveredindex = [];

    for (let i = 0; i < wordstars.length; i++) {

        if (selectedword[i] === letter) { //checks if letter exists in selectedword
            discoveredindex.push(i);
            splitword[i] = letter;
            appearances++;
        }
    }
    if (appearances > 0) {
        infomessage.update.correctguess();
        if (appearances === 1) {infomessage.update(letter + " appeared once.")}
        if (appearances === 2) {infomessage.update(letter + " appears twice.")}
        if (appearances >= 3)  {infomessage.update(letter + " appears three or more times.")}
        wordstars = splitword.join("");
        document.querySelector(".starredtext").innerHTML = wordstars;

        let indices = wordletterindex(discoveredindex);
        console.log(indices);

        stardisplay.animateletter(indices);  // updates the revealed letter display with animation

    }
    else {
        infomessage.update.incorrectguess();
        infomessage.update("Letter did not exist!");
        currentattempts++;
        userattempts.update();
    }

    guesses.push(letter); // adds letter to guessed letters array
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
infomessage.update(welcomemsg);

})

