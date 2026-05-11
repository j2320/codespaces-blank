/**
 * Implement the solution in this function
 *
 * @param {number} n Output goes from 1 to n
 * @returns {(number|string)[]} An array containing all numbers and strings
 */
function fizzbuzz (n) {
    const result=[];
    for(let i=1; i <= n; i++){
        if(i % 15 === 0){
            result.push("FizzBuzz");
        }
        else if(i % 3 === 0){
            result.push("Fizz");
        }
        else if(i % 5 === 0){
            result.push("Buzz");
        }
        else{
            result.push(i);
        }
    }
    return result;
}

let result=fizzbuzz(20);
console.log(result);