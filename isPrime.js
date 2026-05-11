/**
 * Implement the solution in this function
 *
 * @param {number} n Examine this number
 * @returns {boolean} True if n is prime and false otherwise
 */
function isPrime (n) {
     if (n <= 1) return false;
     if (n === 2) return true;
     if (n % 2 === 0) return false;
     
     const limit = Math.sqrt(n);
     for (let i = 3; i <= limit; i += 2) {
         if (n % i === 0) return false;
         
     }
     return true;
}

let result=isPrime(13);
console.log(result);