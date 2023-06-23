/**
*  Task
*  Given a base-10 integer, , convert it to binary (base-2). 
*  Then find and print the base-10 integer denoting the maximum number of consecutive 1's in
*  's binary representation. When working with different bases, it is common to show the base as a subscript.
*  
*  Example
*  n = 125
*  The binary representation of 125 is 1111101. In base-10 , there are 5 and 1 consecutive ones in two groups. 
*  Print the maximum, 5.
*  
*  Input Format
*  
*  A single integer,n
*  
*  Output Format
*  
*  Print a single base-10 integer that denotes the maximum number of consecutive 1's in the binary representation of n.
*  
*  Sample Input 1
*  
*  5
*  
*  Sample Output 1
*  
*  1
*  
*  Sample Input 2
*  
*  13
*  
*  Sample Output 2
*  
*  2
*  
*  Explanation
*  
*  Sample Case 1:
*  The binary representation of 5 is 101 , so the maximum number of consecutive 1's is 1.
*  
*  Sample Case 2:
*  The binary representation of 13 is 1101, so the maximum number of consecutive 1's is 2.
 */

function base10to2(n, res = '') {
    if (n >=2) {
        res += "" + n % 2;
        return base10to2(n = Math.floor(n/2), res );
    } else {
        res += "" + 1;
        return res;
    }
}

function binaryNumbers(n) {
    let binary = base10to2(n);
    let max = 0;
    let count = 0;
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] == 1) {
            count++;
            if (count > max) {
                max = count;
            }
        } else {
            count = 0;
        }
    }
    return max;
}

console.log(binaryNumbers(5));