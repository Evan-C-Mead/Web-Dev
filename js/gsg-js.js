for (var i = 0; i < 10; i++) {
    console.log('for loop iteration #' + i);
}

// function getText() {
//
//   var arr = $('td').map(function() {
//   let $td = $(this);
//   return $td.css('background-color') !== $td.css('color') ? $td.text() : null;}).get();
//
//   console.log(arr.join(''));
//   $('#result').text(arr.join(''));
// }

// function sayHello() {
//     // return "helloMessage";
//     return 23;
// }
//
// console.log(sayHello());

function plusTwo(x) {
    const parsed = parseFloat(x);
    if (isNaN(parsed)) {
        return NaN;
    } else {
        return parsed + 2;
    }
}

console.log(plusTwo(847)); // 849
console.log(plusTwo(-52)); // -50
console.log(plusTwo("4.3")); // 6.3
console.log(plusTwo("0")); // 2
console.log(plusTwo()); // NaN
console.log(plusTwo(null)); // NaN
console.log(plusTwo(true)); // NaN
console.log(plusTwo(false)); // NaN
console.log(plusTwo(NaN)); // NaN
