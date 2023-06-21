/**
*   Given two binary strings (strings containing only 1s and 0s)
*   return their sum (also as a binary string).
*   Note: neither binary string will contain leading 0s 
*   unless the string itself is 0
*   
*   Ex: Given the following binary strings...
*   
*   "100" + "1", return "101"
*   "11" + "1", return "100"
*   "1" + "0", return  "1" 
*/

function addBinary(a, b) {
    // Your Code Here
    let sum = parseInt(a, 2) + parseInt(b, 2);
    return sum.toString(2);
}

console.log(addBinary("100", "1")); // "101"
console.log(addBinary("11", "1")); // "100"
console.log(addBinary("1", "0")); // "1"