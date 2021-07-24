(function () {
    "use strict";

//DOM Elements
const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const lowercaseEl = document.getElementById('lowercase')
const uppercaseEl = document.getElementById('uppercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunction = {
    lower: randomLowerLetter(),
    upper: randomUpperLetter(),
    number: randomNumber(),
    symbol: randomSymbol()
};

// Event Listener
generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    console.log(hasLower, hasUpper, hasNumber, hasSymbol);

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol);
});

// Generate Password Function
function generatePassword(lower, upper, number, symbol, length) {
    // 1 Init PW Variable
    // 2. Filter Out Unchecked Types
    // 3. loop Over Length Call Generator Function
    // 4. Add Final PW to the PW Variable And return

    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    const typesArr = [lower, upper, number, symbol];

}

// Generator Functions
// http://www.net-comber.com/charset.html  <-- character codes for keys
function randomLowerLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// console.log(randomLowerLetter());

function randomUpperLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// console.log(randomUpperLetter());

function randomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// console.log(randomNumber());

function randomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}
// console.log(randomSymbol())

})();