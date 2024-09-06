/***
 * Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
 */


function odd_even(number){
    // console.log(number);
    if (number % 2 === 0){
        return `Even`;
    }else{
        return `odd`;
    }
}
const number = 6;
const result = odd_even(number);
console.log(result);