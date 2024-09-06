/***
 * Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
 */
function evenOddNumber(number){
    // console.log(number);
    if (number % 2 === 1){
        return number*2;
    }else{
        return number/2;
    }
}
const result = evenOddNumber(5);
console.log(result);