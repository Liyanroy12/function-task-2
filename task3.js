/***
 * Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */

function make_age(numbers, size){
    // console.log(numbers);
    console.log("Total array size is: ", size);

    let sum = 0;
    for(const number of numbers){
        sum = sum + number;
    }
    console.log("Total sum is: ", sum);
    let average = sum / size;
    
    return average;
}

const numbers = [12, 43, 65, 76, 54, 65, 76, 86]
const size = numbers.length;
const result = make_age(numbers, size);
console.log("Average value is: ", result.toFixed(2));