/***
 * Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
 */


function binaryZero(str){
    // console.log(str);
    let count = 0;
    for(let i = 0; i <= str.length; i++){
        if(str[i] === '0'){
            count++;
        }
    }
    return count;
}
const str = '1100101010001';
const result = binaryZero(str);
console.log(result);