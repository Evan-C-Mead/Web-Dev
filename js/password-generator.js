(function () {
    "use strict";

// Generator Functions
// http://www.net-comber.com/charset.html  <-- character codes for keys

function randomLowerLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(randomLowerLetter());

function randomUpperLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(randomUpperLetter());

function randomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(randomNumber());

function randomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(randomSymbol())

})();